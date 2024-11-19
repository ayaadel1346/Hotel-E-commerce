<template>

    <main class="text-center">

        <h2 class="text-[20px] capitalize text-darkAccent leading-[50px] ">
          {{ centerPropsData.title }}
        </h2>


        <h1 class="text-black  font-serif my-5 capitalize font-bold md:text-[45px] text-[30px] leading-[55px]">
           {{ centerPropsData.subTitle }}     
        </h1>


        <p 
         v-if="centerPropsData.description" 
         class="text-darkGray my-5 md:text-[25px] text-[16px] leading-[40px] font-thin">
           {{ centerPropsData.description }}    
        </p>

    </main>

</template>

<script setup>
defineProps({
    centerPropsData:{
      type: Object,
      required: true
    }
})
</script>