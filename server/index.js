// Import dependencies using ES module syntax
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const SECRET_KEY = process.env.SECRET_KEY;

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reservationsFile = path.join(__dirname, 'reservations.json');
const usersFile = path.join(__dirname, 'users.json');
const roomsFile = path.join(__dirname, 'rooms.json');

// Middleware setup
app.use(express.json());
app.use(cors());

// Helper functions for reading and writing data
const readData = (file) => {
  try {
    const data = fs.readFileSync(file, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const writeData = (file, data) => {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

// Room API Endpoints
app.post('/add-room', (req, res) => {
  const { roomName, description, capacity, images, price } = req.body;

  if (!roomName || !description || !capacity || !Array.isArray(images) || !price) {
    return res.status(400).json({ message: 'Please provide room name, description, capacity, images, and price' });
  }

  const rooms = readData(roomsFile);
  const newRoom = {
    id: uuidv4(),
    roomName,
    description,
    capacity,
    images,
    price,
  };

  rooms.push(newRoom);
  writeData(roomsFile, rooms);

  res.status(201).json({ message: 'Room added successfully', room: newRoom });
});

app.post('/check-reservation', (req, res) => {
  const { roomId } = req.body;
  if (!roomId) {
    return res.status(400).json({ message: 'Please provide a room ID' });
  }

  const reservations = readData(reservationsFile);
  const roomReservations = reservations.filter((reservation) => reservation.roomId === roomId);

  if (roomReservations.length === 0) {
    return res.status(404).json({ message: 'No reservations found for the specified room' });
  }

  const reservedDates = roomReservations.flatMap((reservation) => reservation.reservedDates);
  const reservedDetails = reservedDates.map((date) => {
    const reservationDate = new Date(date);
    return {
      year: reservationDate.getFullYear(),
      month: reservationDate.getMonth() + 1,
      day: reservationDate.getDate(),
    };
  });

  res.json({ reservedDates: reservedDetails });
});

app.post('/register', (req, res) => {
  const { username, email, phoneNumber } = req.body;
  if (!username || !email || !phoneNumber) {
    return res.status(400).json({ message: 'Please provide username, email, and phone number' });
  }

  const users = readData(usersFile);
  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = {
    id: uuidv4(),
    username,
    email,
    phoneNumber,
  };

  users.push(newUser);
  writeData(usersFile, users);

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

app.get('/room/:id', (req, res) => {
  const { id } = req.params;

  const rooms = readData(roomsFile);
  const room = rooms.find((room) => room.id === id);

  if (!room) {
    return res.status(404).json({ message: 'Room not found' });
  }

  res.json(room);
});

app.delete('/remove-room/:id', (req, res) => {
  const { id } = req.params;

  const rooms = readData(roomsFile);
  const roomIndex = rooms.findIndex((room) => room.id === id);

  if (roomIndex === -1) {
    return res.status(404).json({ message: 'Room not found' });
  }

  rooms.splice(roomIndex, 1);
  writeData(roomsFile, rooms);

  res.json({ message: 'Room removed successfully' });
});

app.get('/rooms', (req, res) => {
  const rooms = readData(roomsFile);

  if (rooms.length === 0) {
    return res.status(404).json({ message: 'No rooms found' });
  }

  res.json(rooms);
});

app.post('/login', (req, res) => {
  const { username, email } = req.body;
  const users = readData(usersFile);

  const user = users.find((user) => user.username === username && user.email === email);
  if (!user) {
    return res.status(400).json({ message: 'Invalid username or email' });
  }

  const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token required' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.userId = user.userId;
    next();
  });
};

// Reservation API
app.post('/reserve', authenticateToken, (req, res) => {
  const { roomId, date, numberOfNights, adults, children } = req.body;
  if (!roomId || !date || !numberOfNights || adults == null || children == null) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  const startDate = new Date(date);
  const reservedDates = [];

  for (let i = 0; i < numberOfNights; i++) {
    const reservedDate = new Date(startDate);
    reservedDate.setDate(startDate.getDate() + i);
    reservedDates.push(reservedDate.toISOString().split('T')[0]);
  }

  const reservations = readData(reservationsFile);

  const isAvailable = reservations.every((reservation) => {
    if (reservation.roomId === roomId) {
      return !reservation.reservedDates.some((reservedDate) => reservedDates.includes(reservedDate));
    }
    return true;
  });

  if (!isAvailable) {
    return res.status(400).json({ message: 'Room not available for the selected dates' });
  }

  const newReservation = {
    id: uuidv4(),
    userId: req.userId,
    roomId,
    date: startDate.toISOString().split('T')[0],
    numberOfNights,
    reservedDates,
    adults,
    children,
  };

  reservations.push(newReservation);
  writeData(reservationsFile, reservations);

  res.status(201).json({ message: 'Reservation successful', reservation: newReservation });
});

// Start Express server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
