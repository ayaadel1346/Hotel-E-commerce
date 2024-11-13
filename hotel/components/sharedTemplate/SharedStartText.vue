<template>

    <main class="text-start lg:text-start md:text-center">

        <h2 class="text-[20px] text-darkAccent leading-[50px] ">
          {{ aboutPropsData.title }}
        </h2>

        <h1 class="text-black my-5 font-bold md:text-[45px] text-[30px] leading-[55px]">
           {{ aboutPropsData.subTitle }}     
        </h1>

        <p 
         v-if="aboutPropsData.description" 
         class="text-darkGray my-5 md:text-[25px] text-[16px] leading-[40px] font-thin">
           {{ aboutPropsData.description }}    
        </p>

    </main>

</template>

<script setup>
defineProps({
    aboutPropsData:{}
})
</script>