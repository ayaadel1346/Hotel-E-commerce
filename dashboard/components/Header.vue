<template>

    <nav class="flex justify-end items-center bg-gray p-5 shadow-2xl">
  
      <button class="text-gray-500 dark:text-white mx-10">
        <Icon
           name="ic:baseline-notifications-none"
          size="35"
          class="text-accent mr-2"/>
      </button>
  
      
      <button 
       @click="toggleTheme" 
       class="text-gray-500 dark:text-white">
        
        <Icon
         v-if="colorMode.preference === 'dark'"
         name="ic:outline-wb-sunny"
         size="35"
         class="text-accent mr-2"/>
      
        <Icon
          v-else
          name="ic:outline-dark-mode"
          size="35"
          class="text-accent mr-2"/>

      </button>

    </nav>



  </template>
  

<script setup>
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>
