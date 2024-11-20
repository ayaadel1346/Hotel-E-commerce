<template>
  <keep-alive>
    <div>
      <RoomsTopSection />
      <div id="roomsSections">
        <RoomsAllRooms />
      </div>
    </div>
  </keep-alive>
</template>

<script setup>
const rooms = useState('roomsData', () => [])


const fetchRooms = async () => {
  if (rooms.value.length) return; 

  try {
    const { data:response, status } = await useLazyAsyncData('fetchRooms', () =>
      $fetch('http://localhost:5000/rooms', { method: 'GET' })
    );

    watch(response,(newResponse)=>{
      if(response.value && response.value.rooms){
        rooms.value=response.value.rooms;
      }else {
        console.error('No rooms data found');
      }
    })
    
  } catch (err) {
    console.error('Error fetching rooms:', err);
  }
};


fetchRooms();
</script>
