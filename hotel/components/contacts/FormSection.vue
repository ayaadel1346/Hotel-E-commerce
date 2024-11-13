<template>
  
    <main class="container-fluid lg:container my-[7%] lg:mx-auto mx-5 flex flex-col lg:flex-row lg:justify-between gap-7 lg:items-start">
     
      <aside class="lg:w-1/2 flex flex-col items-start">

        <h1 class="text-black font-semibold leading-[50px] text-[25px] md:text-[35px]">
          Get In Touch
        </h1>

        <p class="text-darkGray my-5 md:text-[20px] text-[18px] leading-[30px] md:leading-[50px]">
          We’re here to assist you with any questions or needs you may have. Our friendly team is available to provide information,
          assist with bookings, and ensure that your experience with us is exceptional from start to finish.
        </p>

        <section v-for="(link, index) in linksData" :key="index" class="flex mt-8 justify-center items-center">
          <aside>
            <Icon :size="40" :name="link.iconName" class="text-accent mr-2" />
          </aside>

          <aside class="mx-2">
            <h1 class="md:text-[20px] text-[16px] text-darkGray leading-[30px]">
              {{ link.header }}
            </h1>
            
            <NuxtLink
            :to="link.linkSrc" 
            class="md:text-[22px] mt-5 text-[16px] text-black leading-[30px] hover:text-accent transition-all duration-300 ease-out">
            {{ link.linkName }}
            </NuxtLink>
          </aside>
        </section>

      </aside>
  
     
      <aside class="lg:w-1/2 h-full flex flex-col items-start mt-6 lg:mt-0">

        <h1 class="text-black font-semibold leading-[50px] text-[25px] md:text-[35px]">
          Send Message
        </h1>

        <form class="w-full">

          <section class="flex md:flex-row flex-col gap-5 mt-5">

            <div class="relative flex items-center w-full">
              <Icon name="mdi:account" class="absolute left-4 text-gray-400" />
              <input 
               type="text" 
               class="pl-12 p-5 w-full border-[2px] border-gray focus:border-accent focus:ring-0 focus:outline-none" 
               placeholder="Full Name" />
            </div>

            <div class="relative flex items-center w-full">
              <Icon name="mdi:email" class="absolute left-4 text-gray-400" />
              <input 
               type="email" 
               class="pl-12 p-5 w-full border-[2px] border-gray focus:border-accent focus:ring-0 focus:outline-none" 
               placeholder="Email Address" />
            </div>

          </section>

  
          <section class="flex mt-5 md:flex-row flex-col gap-5">

            <div class="relative flex items-center w-full">
              <Icon name="mdi:phone" class="absolute left-4 text-gray-400" />
              <input 
               type="tel" 
               class="pl-12 p-5 w-full border-[2px] border-gray focus:border-accent focus:ring-0 focus:outline-none" 
               placeholder="Phone" />
            </div>

            <div class="relative flex items-center w-full">
              <Icon name="mdi:file-document" class="absolute left-4 text-gray-400" />
              <input 
               type="text" 
               class="pl-12 p-5 w-full border-[2px] border-gray focus:border-accent focus:ring-0 focus:outline-none " 
               placeholder="Subject" />
            </div>

          </section>

  
          <div class="relative flex items-start w-full mt-5">
            <Icon name="mdi:comment" class="absolute top-5 left-4 text-gray-400" />
            <textarea 
             class="pl-12 p-5 h-[100px] md:h-[160px] w-full border-[2px] border-gray focus:border-accent focus:ring-0 focus:outline-none"
             placeholder="Type Your Comments"></textarea>
          </div>

          <button class="relative w-full after:bg-[#d0a668]  before:bg-[#d0a668] button-reverse group z-0 overflow-hidden 
                         transition-transform duration-300 ease-out py-4 px-7 text-[20px] flex justify-center items-center mt-7
                         md:w-[300px] border-[1px] text-white bg-accent">
            <span class="z-10 text-white"> Submit</span>
          </button>

        </form>

      </aside>

    </main>
    
  </template>
  
  <script setup>
  const linksData = [
    {
      iconName: 'mdi:phone',
      header: 'Emergency Help',
      linkName: '+123 (458) 896 895',
      linkSrc: 'tel:+123458896895'
    },
    {
      iconName: 'mdi:email',
      header: 'Quick Email',
      linkName: 'support@gmail.com',
      linkSrc: 'mailto:support@gmail.com'
    },
    {
      iconName: 'mdi:map-marker',
      header: 'Office Address',
      linkName: 'Hurghada, Red Sea Governorate, Egypt',
      linkSrc: 'https://www.google.com/maps?q=Hurghada,+Red+Sea+Governorate,+Egypt'
    }
  ];
  </script>


