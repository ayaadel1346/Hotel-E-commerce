<template>
    <main 
     v-if="rooms" 
     class="container-fluid lg:container mx-5 lg:mx-auto py-[7%]">

        <h2 class="md:text-[20px] text-[16px] text-center text-darkAccent font-bold ">
          Rooms & Suites
        </h2>

        <h1 class="md:text-[25px] mt-3 text-[18px] font-serif lg:text-[50px] text-center text-black ">
            Our Exquisite Rooms & Suites Collection
        </h1>


        <div class="flex justify-end items-start mt-6">

          <select v-model="sortOption" class="px-4 py-2 border rounded-md">
            <option value="all">All</option>
            <option value="alphabetical">Alphabetical Order</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="capacityHighToLow">Capacity: High to Low</option>
            <option value="capacityLowToHigh">Capacity: Low to High</option>
          </select>

        </div>


      <section class="grid mt-[80px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        <article 
         v-for="(room,index) in sortedRooms" 
         :key="index" 
         class="card cursor-pointer">


         <div class="flip-box">


            <div class="flip-box-front">
              <NuxtImg
                :src="room.images[0]"
                width="80"
                height="80"
                alt="image"
                class="rounded h-[300px] w-full"
              />
  
              <h1 class="text-black font-sans px-4 font-bold text-[20px] md:text-[23px] mt-5 lg:text-[30px]">
                {{ room.roomName }}
              </h1>
            </div>


            <div class="flip-box-back flex flex-col justify-start items-center"> 

              <p class="text-black px-4 pb-5  text-[16px] md:text-[18px] my-3 lg:text-[20px]">
                {{ room.description }}
              </p> 
  
              <p class="text-gray px-4 pb-5  text-[16px] md:text-[18px] my-3 lg:text-[20px]">
                Price: ${{ room.price }}/per Neight | Capacity: {{ room.capacity }}
              </p>

              <div class="flex justify-center items-center">
                <NuxtLink 
                 to="/" 
                 class="text-white   hover:text-black flex justify-center gap-1 items-center p-2 rounded w-[120px] bg-accent hover:bg-white transition-all duration-300 ease-in-out">
                      <Icon :size="25" name="ic:baseline-remove-red-eye" /> More Info
                  </NuxtLink>
              </div>

            </div>

         </div>

        </article>

       
      </section>

    </main>

</template>


<script setup>
  const sortOption = ref('all');
  const rooms = useState('roomsData');
 
 const sortedRooms= computed(()=>{
    let sorted=[...rooms.value];

    switch(sortOption.value) {
      case 'alphabetical' :
      sorted.sort((a,b)=>a.roomName.localeCompare(b.roomName));
      break;
      case 'priceLowToHigh':
      sorted.sort((a,b)=>a.price - b.price);
      break;
      case 'priceHighToLow':
      sorted.sort((a,b)=>b.price - a.price)
      break;
      case 'capacityHighToLow':
      sorted.sort((a, b) => b.capacity - a.capacity);
      break;
      case 'capacityLowToHigh':
      sorted.sort((a, b) => a.capacity - b.capacity);
      break;
      case 'all':
      return rooms.value;
      default:
      break;
    }
    return sorted;
  })
</script>




<style scoped>
.card {
  perspective: 1000px;
}

.flip-box {
  min-width: 300px;
  min-height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
  will-change: transform;
}


.flip-box:hover {
  transform: rotateY(180deg);
}


.flip-box-front,
.flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}


.flip-box-front {
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


.flip-box-back {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333;
  transform: rotateY(180deg);
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
  </style>
  