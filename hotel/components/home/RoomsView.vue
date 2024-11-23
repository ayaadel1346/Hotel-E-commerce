<template>
  <main class="container-fluid relative pb-6 bg-primaryDark my-[7%] border-t-[2px] border-b-[2px] border-accent">
   
    <NuxtImg 
      src="https://html.designingmedia.com/hillcrest/assets/images/left-lamp.png"
      width="150"
      alt="Lamp image"
      height="70"
      class="mx-10 shadow-accent animate-moveLeftRight"
    />

   
    <NuxtImg 
      src="https://html.designingmedia.com/hillcrest/assets/images/contact-backgroundimage.png"
      width="300"
      alt="Moving background"
      height="100"
      class="mx-10 h-full hidden lg:block shadow-accent absolute right-[10%] top-0 animate-moveLeftRight"
    />

    
    <section class="flex flex-col lg:flex-row justify-center items-center lg:container mx-auto px-5 lg:px-0">
      <div 
        v-for="(room, index) in roomData" 
        :key="index"
        class="relative lg:h-[63vh] lg:w-full w-[95%] group"
      >
       
        <NuxtImg 
          :src="room.roomImage"
          :alt="`Room image ${index}`"
          :class="[ 
            'w-full shadow-2xl rounded-[10px] mt-5 lg:mt-0 transition-all duration-300 ease-out cursor-pointer h-full object-cover', 
            index === 0 && hoverImage ? 'lg:scale-100' : 'lg:scale-x-[0.8] lg:group-hover:scale-x-[0.95]'
          ]"
        />

      
        <h1 
          :class="[ 
            index === 0 && hoverImage ? 'lg:opacity-1 translate-y-0' : 'lg:opacity-0 lg:translate-y-[100%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0', 
            'lg:text-[30px] font-semibold text-[20px] italic text-white absolute bottom-[5%] left-[17%] transition-all duration-300 ease-out text-shadow'
          ]"
        >
          {{ room.roomName }}
        </h1>

       
        <div class="circle-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
          <NuxtLink 
            to="/somepath"
            class="rounded-full mt-4 flex text-white italic justify-center items-center transition-all duration-300 ease-out group-hover:scale-110"
          >
            Tap to Check
          </NuxtLink>
        </div>

      </div>

    </section>

  </main>
</template>

<script setup>
const roomData = [
  {
    roomName: 'Junior Suite',
    roomImage: '/images/photo-1618773928121-c32242e63f39.avif',
  },
  {
    roomName: 'Deluxe Room',
    roomImage: '/images/istockphoto-1482326431-612x612.webp',
  },
  {
    roomName: 'Double Room',
    roomImage: '/images/istockphoto-1815808691-612x612 (1).webp',
  }
];

const hoverImage = useState('hoveredImage', () => true);

const toggleImage = () => {
  hoverImage.value = !hoverImage.value;
};
</script>

<style scoped>

@keyframes growDisappear {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    transform: scale(1.6);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}


.circle-container::before,
.circle-container::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.22);
  width: 4.5rem;
  height: 4.5rem;
  top: 0;
  animation: growDisappear 1.5s ease-in-out infinite;
  opacity: 1;
}

.circle-container::before {
  animation-delay: 0s;
}

.circle-container::after {
  animation-delay: 0.2s;
}


.text-shadow {
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
}
</style>
