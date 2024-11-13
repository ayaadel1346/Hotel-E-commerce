<template>

    <main class="container-fluid h-[87vh] relative">
      
        <v-parallax
        :src=" TopSectionProp.imageSrc"
        alt="background image"
        class="absolute top-0 left-0 w-full h-full"/>


      <NuxtLink
       :to=" TopSectionProp.src" 
       class="absolute z-10 text-[30px] text-white top-[47%] left-[37%] md:left-[44%] lg:left-[47%]">
       {{ TopSectionProp.linkName }}
      </NuxtLink>


      <div class="circle-animation"></div>
    
    </main>
    
</template>



<script setup>
defineProps ({
    TopSectionProp:{}
})
</script>



<style scoped>
@keyframes scaling {
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
}

.circle-animation::after{
   content:'';
   position:absolute;
   top:41.5%;
   left:46.2%;
   border:3px solid rgba(255, 255, 255, 0.404);
   background-color: transparent;
   border-radius: 50%;
   width: 130px;
   height: 130px;
   z-index: 1;
   animation: scaling 2s infinite ease-out;
}

.circle-animation::before{
   content:'';
   position:absolute;
   top:42%;
   left:46.5%;
   border:3px solid rgba(255, 255, 255, 0.314);
   background-color: transparent;
   border-radius: 50%;
   width: 120px;
   height: 120px;
   z-index: 1;
   animation: scaling 2s  infinite ease-out;
   animation-delay: 0.6s; 
}


@media (max-width: 700px) {
    .circle-animation::before{
        left:34%;
    }
    .circle-animation::after{
        left:33%;
}
}

@media (min-width: 700px) and (max-width: 1024px) {
    .circle-animation::before {
        left: 42.2%; 
        top:43%;
    }
    .circle-animation::after {
        left: 41.6%; 
        top:42.5%;
    }
}
</style>


