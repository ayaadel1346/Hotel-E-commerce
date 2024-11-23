<template>
  
  <keep-alive>

    <main>

      <RoomsTopSection />

      <section id="roomsSections">

        <div 
         v-if="statusRooms === 'pending'"
         class="my-[70px] px-10 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1  w-full gap-3">
      
          <div 
           v-for="index in 9" 
           :key="index" 
           class="w-full mt-9">
           <SkeletonLoader/>
          </div>
          
        </div>

       <div v-else >
        <RoomsAllRooms />
       </div>

      </section>

      <FooterMainFooter/>

    </main>

  </keep-alive>

</template>


<script setup>
useHead({
  title: 'Hotera-rooms',
})

const rooms = useState('roomsData', () => []);
const statusRooms=ref('pending');


const fetchRooms = async () => {
  if (rooms.value.length) return; 

  try {
    const { data:response} = await useLazyAsyncData('fetchRooms', () =>
      $fetch('http://localhost:5000/rooms', { method: 'GET' })
    );

    watch(response,(newResponse)=>{
      if(response.value && response.value.rooms){
        rooms.value=response.value.rooms;
        statusRooms.value='loaded';
      }else {
        console.error('No rooms data found');
        statusRooms.value='error';
      }
    })
    
  } catch (err) {
    console.error('Error fetching rooms:', err);
    statusRooms.value='error';
  }
};


fetchRooms();

</script>
