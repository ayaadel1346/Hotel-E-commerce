<template>

    <main  
     v-motion-slide-visible-once-top  
     class="duration-2000 overflow-hidden container-fluid  lg:container lg:mx-auto px-5 pb-[3%] lg:pb-0  pt-[4%]">
        
        <SharedTemplateSharedCenterText :centerPropsData="centerPropsData"/>
 
      <section class="grid mt-7 lg:mt-[80px]  grid-cols-1 gap-10 lg:flex lg:gap-6 lg:justify-center lg:items-center md:grid-cols-2">

       <div 
         v-for="(data ,index) in homeFacilitiesData" 
         :key="index"
         :class="[index === 3?'':'lg:border-r-[2px] lg:border-darkAccent' ,'lg:w-1/4 p-3 flex flex-col items-center gap-5']">

        <NuxtImg 
          :src="data.image"
          width="70"
          height="70"
          alt="icon"/>

         <h1 class="md:text-[27px] md:min-h-[40px]   text-center text-[20px] text-black font-bold leading-[40px]">
            {{data.title}}
         </h1>

         <p class="md:text-[18px] md:min-h-[100px] text-center text-[16px] text-darkGray leading-[30px]">
            {{data.description}}
         </p>
        
       </div>


      </section>
   

    </main>

</template>


<script setup>
const homeFacilitiesData=[
    {
       title:'Private Parking',
       description:'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
       image:'/images/parking-garage-transportation-car-parking-svgrepo-com.svg'
    }, 
    {
       title:'High Speed Wifi',
       description:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
       image:'/images/phone-wifi-signal-svgrepo-com.svg'
    }, 
    {
       title:'Bar & Restaurant',
       description:'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
       image:'/images/cocktail-with-orange-slice-svgrepo-com.svg'
    }, 
    {
       title:'Swimming Pool',
       description:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
       image:'/images/swimming-pool-svgrepo-com.svg'
    }
]


const centerPropsData={
    title:'Hotera Hotel',
    subTitle:'Main Facilities'
}
</script>