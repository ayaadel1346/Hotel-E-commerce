import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import { fileURLToPath } from 'url';


dotenv.config();

const app = express();
const SECRET_KEY = process.env.SECRET_KEY;
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reservationsFile = path.join(__dirname, 'reservations.json');
const usersFile = path.join(__dirname, 'users.json');
const adminFile = path.join(__dirname, 'admin.json');
const roomsFile = path.join(__dirname, 'rooms.json');
const uploadsDir = path.join(__dirname, 'uploads');

app.use('/uploads', express.static(uploadsDir));  



if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });


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


const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token required' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.userId = user.userId;
    req.isAdmin = user.isAdmin; 
    next();
  });
};


const isAdmin = (req, res, next) => {
  if (!req.isAdmin) {
    return res.status(403).json({ message: 'Admin privileges required' });
  }
  next();
};


app.get('/room/:id', (req, res) => {
  const { id } = req.params;
  const rooms = readData(roomsFile);
  const room = rooms.find((room) => room.id === id);

  if (!room) {
    return res.status(404).json({ message: 'Room not found' });
  }

  res.json(room);
});

app.get('/rooms', (req, res) => {
  const rooms = readData(roomsFile);

  if (rooms.length === 0) {
    return res.status(404).json({ message: 'No rooms found', rooms: [] });
  }

  res.status(200).json({
    message: 'Rooms fetched successfully',
    rooms: rooms,
  });
});

app.post('/add-room', authenticateToken, isAdmin, upload.array('images', 10), (req, res) => {
  const { roomName, description, capacity, price } = req.body;
  const files = req.files;

  if (!roomName || !description || !capacity || !files || !price) {
    return res.status(400).json({ message: 'Please provide room name, description, capacity, images, and price' });
  }

  const images = files.map((file) => file.filename);

  const rooms = readData(roomsFile);
  const newRoom = {
    id: uuidv4(),
    roomName,
    description,
    capacity: parseInt(capacity, 10),
    images: images.map((image) => `${req.protocol}://${req.get('host')}/uploads/${image}`),
    price: parseFloat(price),
  };

  rooms.push(newRoom);
  writeData(roomsFile, rooms);

  res.status(201).json({ message: 'Room added successfully', room: newRoom });
});

app.put('/edit-room/:id', authenticateToken, isAdmin, upload.array('images', 10), (req, res) => {
  const { id } = req.params;
  const { roomName, description, capacity, price } = req.body;
  const files = req.files;

  const rooms = readData(roomsFile);
  const roomIndex = rooms.findIndex((room) => room.id === id);

  if (roomIndex === -1) {
    return res.status(404).json({ message: 'Room not found' });
  }

  const images = files.map((file) => file.filename);

  const updatedRoom = {
    ...rooms[roomIndex],
    roomName,
    description,
    capacity: parseInt(capacity, 10),
    images: images.length > 0 ? images.map((image) => `${req.protocol}://${req.get('host')}/uploads/${image}`) : rooms[roomIndex].images,
    price: parseFloat(price),
  };

  rooms[roomIndex] = updatedRoom;
  writeData(roomsFile, rooms);

  res.json({ message: 'Room updated successfully', room: updatedRoom });
});

app.delete('/remove-room/:id', authenticateToken, isAdmin, (req, res) => {
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

// User Registration
app.post('/register', (req, res) => {
  const { email, password, phoneNumber } = req.body;

  
  if (!email || !password || !phoneNumber) {
    return res.status(400).json({ message: 'Please provide email, password, and phone number' });
  }

  const users = readData(usersFile);

  
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  
  const newUser = {
    id: uuidv4(),
    email,
    password, 
    phoneNumber, 
    isAdmin: false,
  };


  users.push(newUser);
  writeData(usersFile, users);

  res.status(201).json({ message: 'User registered successfully', user: { id: newUser.id, email, phoneNumber } });
});



app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  const users = readData(usersFile);
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
});




// admin api 

app.post('/admin/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide username, email, and password' });
  }

  const users = readData(adminFile);

  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  const newUser = {
    id: uuidv4(),
    username,
    email,
    password, 
    isAdmin:true,
  };

  users.push(newUser);
  writeData(usersFile, users);

  res.status(201).json({ message: 'User registered successfully', user: { id: newUser.id, username, email } });
});


app.post('/admin/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  const users = readData(adminFile);
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({userId: user.id, isAdmin: user.isAdmin }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
});



app.post('/reserve', authenticateToken, (req, res) => {
  const { roomId, startDate, endDate } = req.body;

  if (!roomId || !startDate || !endDate) {
    return res.status(400).json({ message: 'Please provide roomId, startDate, and endDate' });
  }

  const rooms = readData(roomsFile);
  const room = rooms.find((room) => room.id === roomId);

  if (!room) {
    return res.status(404).json({ message: 'Room not found' });
  }

  const reservations = readData(reservationsFile);
  const newReservation = {
    id: uuidv4(),
    roomId,
    userId: req.userId,
    startDate,
    endDate,
  };

  reservations.push(newReservation);
  writeData(reservationsFile, reservations);

  res.status(201).json({ message: 'Reservation created successfully', reservation: newReservation });
});


app.get('/my-reservations', authenticateToken, (req, res) => {
  const reservations = readData(reservationsFile);
  const userReservations = reservations.filter((res) => res.userId === req.userId);

  res.json({ message: 'Reservations fetched successfully', reservations: userReservations });
});


app.get('/all-reservations', authenticateToken, isAdmin, (req, res) => {
  const reservations = readData(reservationsFile);

  res.json({ message: 'All reservations fetched successfully', reservations });
});


app.delete('/cancel-reservation/:id', authenticateToken, (req, res) => {
  const { id } = req.params;

  const reservations = readData(reservationsFile);
  const reservationIndex = reservations.findIndex((res) => res.id === id && res.userId === req.userId);

  if (reservationIndex === -1) {
    return res.status(404).json({ message: 'Reservation not found or you are not authorized to cancel it' });
  }

  reservations.splice(reservationIndex, 1);
  writeData(reservationsFile, reservations);

  res.json({ message: 'Reservation canceled successfully' });
});



app.delete('/admin-cancel-reservation/:id', authenticateToken, isAdmin, (req, res) => {
  const { id } = req.params;

  const reservations = readData(reservationsFile);
  const reservationIndex = reservations.findIndex((res) => res.id === id);

  if (reservationIndex === -1) {
    return res.status(404).json({ message: 'Reservation not found' });
  }

  reservations.splice(reservationIndex, 1);
  writeData(reservationsFile, reservations);

  res.json({ message: 'Reservation canceled successfully by admin' });
});



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
