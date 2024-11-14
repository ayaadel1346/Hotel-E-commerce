<template>

    <main class="flex">
     
      <aside
        v-show="isOpenSidebar"
        class="w-[15%] flex flex-col justify-start items-start bg-gray h-full fixed top-0 left-0 shadow-2xl transition-all duration-300 ease-in-out">
        
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
              'bg-accent text-black': isActiveLink(link.src),
              'text-black hover:text-accent': !isActiveLink(link.src),
              'hover:translate-x-1 transform-translate duration-300 ease-out px-4 w-full py-2 rounded':true
            }">
            {{ link.name }}
          </NuxtLink>

        </div>

      </aside>
  
    
      <aside
        v-show="!isOpenSidebar"
        class="w-[2%] bg-gray flex justify-end items-start h-full fixed top-0 left-0 shadow-2xl transition-all duration-300 ease-in-out">
        
        <Icon
          @click="toggleSidebar"
          name="ic:baseline-keyboard-double-arrow-right"
          size="30"
          class="text-accent mt-10 mr-2"
        />

      </aside>
  
    
      <section :class="[isOpenSidebar ? 'ml-[15%]' : 'ml-[2%]', 'transition-all duration-300 ease-in-out']">
        <NuxtPage />
      </section>

    </main>

  </template>
  


  <script setup> 
 const isOpenSidebar = useState("dashboardSidebar", () => false);
  

  const links = [
    { src: '/', name: 'Home' },
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
  


  <style scoped>
  .bg-accent {
    background-color:var(--link-color);
  }
  </style>
  