<template>

    <main class="container-fluid relative pb-6 bg-primaryDark  my-[7%] border-t-[2px] border-b-[2px] border-accent ">


      <NuxtImg 
        src="https://html.designingmedia.com/hillcrest/assets/images/left-lamp.png"
        width="150"
        alt="lamb image"
        height="70"
        class="mx-10 shadow-accent animate-moveLeftRight"
      />
      

      <NuxtImg 
        src="https://html.designingmedia.com/hillcrest/assets/images/contact-backgroundimage.png"
        width="300"
        alt="moving background"
        height="100"
        class="mx-10 h-full hidden lg:block shadow-accent absolute right-[10%] top-0 animate-moveLeftRight"
      />
    

      <section class="flex flex-col lg:flex-row justify-center items-center lg:container container-fluid lg:mx-auto px-5 lg:px-0">
       
        <div 
         v-for="(room,index) in roomData" 
         :key="index"
         class="relative lg:h-[63vh] lg:w-full w-[95%] group">
          
          <NuxtImg 
            :src="room.roomImage"
            width="300"
            height="200"
            @mouseenter="toggleImage"
            @mouseleave="toggleImage"
            alt="room image"
            :class="[ 
              'w-full shadow-2xl rounded-[10px] mt-5 lg:mt-0 transition-all duration-300 ease-out cursor-pointer h-full', 
              index === 0 && hoverImage ? 'lg:scale-[1]' : 'lg:scale-x-[0.6] lg:group-hover:scale-100'
            ]"
          />
          
          <h1 :class="[ 
              index === 0 && hoverImage ? 'lg:opacity-1 translate-y-0' : 'lg:opacity-0 lg:translate-y-[100%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0', 
              'lg:text-[30px] font-semibold text-[20px] italic text-white absolute bottom-[5%] left-[17%] transition-all duration-300 ease-out'
            ]">
            {{ room.roomName }}
          </h1>
  
          <div class="circle-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
            
            <NuxtLink 
              to="/somepath"
              class="rounded-full mt-5 flex text-white italic justify-center items-center transition-all duration-300 ease-out group-hover:scale-110">
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
      roomImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGp1aW9yJTIwc3VpdGUlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      roomName: 'Deluxe Room',
      roomImage: 'https://media.istockphoto.com/id/1482326431/photo/interior-bedroom-wall-mockup-3d-rendering-3d-illustration.jpg?s=612x612&w=0&k=20&c=-Smt8qpPo5OxmCKuPC36VSj80rJPeM1_dWZ6a-CHCog=',
    },
    {
      roomName: 'Double Room',
      roomImage: 'https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=612x612&w=0&k=20&c=wmYZMUx0cvzGCDg9Di3HT-6NMDvPVhycuAxrQzFfKiM=',
    }
  ];
  
  const hoverImage = useState('hoveredImage', () => true);
  

  const toggleImage = () => {
    hoverImage.value = !hoverImage.value;
  }
  </script>
  

  <style scoped>
  @keyframes growDisappear {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    50% {
      transform: scale(1.5);
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
    width: 4rem;
    height: 4rem;
    top:0;
    animation: growDisappear 1.5s ease-in-out infinite;
    opacity: 1;
  }
  
  .circle-container::before {
    animation-delay: 0s;
    background-color: rgba(255, 255, 255, 0.23); 
  }
  
  .circle-container::after {
    animation-delay: 0.2s;
    background-color: rgba(255, 255, 255, 0.4); 
  }
  
  .circle-container:hover::before,
  .circle-container:hover::after {
    opacity: 0;
  }
  
  .circle-container .NuxtLink {
    z-index: 10;
  }
  </style>
  