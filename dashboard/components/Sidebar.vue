<template>

    <main class="flex">

      <aside
        v-show="mobileSidebar"
        class="md:w-[50%] w-[70%] lg:hidden flex flex-col justify-start items-start bg-gray h-full fixed top-0 left-0 shadow-2xl transition-all duration-300 ease-in-out">
        
        <div class="mt-5  ml-5  w-[75%] text-[20px] flex flex-col space-y-5">

          <NuxtLink
            v-for="(link, index) in links"
            :key="index"
            :to="link.src"
            :class="{
              'bg-accent text-black': isActiveLink(link.src),
              'text-tableText hover:text-accent': !isActiveLink(link.src),
              'hover:translate-x-1 transform-translate duration-300 ease-out px-4 w-full py-2 rounded':true
            }">
            {{ link.name }}
          </NuxtLink>

        </div>

      </aside>


     
      <aside
        v-show="isOpenSidebar"
        class="lg:w-[15%] hidden lg:flex flex-col justify-start items-start bg-gray h-full fixed top-0 left-0 shadow-2xl transition-all duration-300 ease-in-out">
        
        <button 
         @click="toggleSidebar" 
         class="w-full flex justify-end items-start">

          <Icon
            name="ic:baseline-keyboard-double-arrow-left"
            size="30"
            class="text-accent mt-10 mr-2"/>

        </button>
  
        <div class="mt-5  ml-5  w-[75%] text-[20px] flex flex-col space-y-5">

          <NuxtLink
            v-for="(link, index) in links"
            :key="index"
            :to="link.src"
            :class="{
              'bg-accent dark:bg-rowHover text-black': isActiveLink(link.src),
              'text-tableText hover:text-accent': !isActiveLink(link.src),
              'hover:translate-x-1 transform-translate duration-300 ease-out px-4 w-full py-2 rounded':true
            }">
            {{ link.name }}
          </NuxtLink>

        </div>

      </aside>
  

    
      <aside
        v-show="!isOpenSidebar"
        class="hidden  lg:w-[2%] bg-gray lg:flex justify-end items-start h-full fixed top-0 left-0 shadow-2xl transition-all duration-300 ease-in-out">
        
        <Icon
          @click="toggleSidebar"
          name="ic:baseline-keyboard-double-arrow-right"
          size="30"
          class="text-accent mt-10 mr-2"
        />

      </aside>
  
    
      <section :class="[isOpenSidebar ? 'ml-[15%] w-full' : 'ml-[2%] w-full']">
        <NuxtPage />
      </section>
      

    </main>

  </template>
  


<script setup>

const mobileSidebar=useState('mobileSidebar');

const isOpenSidebar = ref (false);
  

  const links = [
    { src: '/home', name: 'Home' },
    { src: '/users', name: 'Users' },
    { src: '/rooms', name: 'Rooms' },
    { src: '/reservations', name: 'Reservations' }
  ];
  
 
  const isActiveLink = (link) => {
    const route = useRoute();
    return route.path === link; 
  };
  
  const toggleSidebar = () => {
    isOpenSidebar.value = !isOpenSidebar.value;
  };
  </script>
  


