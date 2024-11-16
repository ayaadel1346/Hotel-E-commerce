<template>

    <nav class="flex justify-end items-center bg-gray p-5 shadow-2xl">
  
      <button class="text-gray-500 dark:text-white ">
        <Icon
           name="ic:baseline-notifications-none"
          size="35"
          class="text-accent "/>
      </button>
    
      
      <button 
       @click="toggleTheme" 
       class="text-gray-500 dark:text-white">
        
        <Icon
         v-if="colorMode.preference === 'dark'"
         name="ic:outline-wb-sunny"
         size="35"
         class="text-accent mx-5"/>
      
        <Icon
          v-else
          name="ic:outline-dark-mode"
          size="35"
          class="text-accent mx-5"/>

      </button>


      <button 
      @click="toggleSidebar"
      class="lg:hidden md:block text-gray-500 dark:text-white ">

        <Icon
           name="ic:baseline-dehaze"
          size="35"
          class="text-accent "/>
      </button>
      

    </nav>



  </template>
  

<script setup>

const colorMode = useColorMode();
const mobileSidebar=useState('mobileSidebar',()=>false);

const toggleSidebar=()=>{
  mobileSidebar.value =! mobileSidebar.value;
}

const toggleTheme = ()=> {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>
