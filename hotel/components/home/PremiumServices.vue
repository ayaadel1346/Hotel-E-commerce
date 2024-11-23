<template>
    
 <main class="container-fluid overflow-hidden  py-[10%]">

    <section class=" flex lg:container container-fluid px-5 lg:px-0 lg:mx-auto flex-col  lg:flex-row lg:justify-between lg:items-center">

        <aside class="lg:block hidden w-full relative lg:mt-0 mt-[50px]  lg:w-[40%]">

            <v-parallax
            src="/images/istockphoto-1732983887-612x612.webp"
            alt="image"
            class="rounded w-full h-[250px] md:w-[80%] md:mx-auto lg:mx-0 lg:w-full lg:h-[600px]"
            ></v-parallax>
        
       

            <NuxtImg
            src="/images/istockphoto-2021707621-612x612.webp"
            width="450"
            height="300"
            alt="image"
            class="rounded absolute bottom-[-40px] right-[-20%]  hidden lg:block  shadow-2xl  shadow-white/40"
            />
        
        </aside>


        <aside 
         v-motion-slide-visible-once-right 
         class="duration-2000  w-full  lg:w-[40%]  lg:items-start  lg:justify-start ">

            <SharedTemplateSharedStartText :aboutPropsData="aboutPropsData"/>
           
                <div 
                 v-for="(data,index) in dataList" 
                 :key="index" 
                 class=" flex flex-col items-start justify-center">

                    <div class="flex justify-start items-start my-5">

                      <NuxtImg 
                        src='/images/check-badge-svgrepo-com (1).svg'
                        width='50'
                        height='50'
                        alt='icon image'/>

                        <h5 class="md:text-[25px] mx-4 font-extralight leading-[40px] text-darkGray text-[20px]">
                            {{data}}
                        </h5>

                    </div>

                </div>

        </aside>

    </section>

 </main>

</template>

<script setup>
const aboutPropsData = {
    title:'PREMIUM SERVICES',
    subTitle:'Your Every Hotel Need, Met with Our Diverse Services.',
}


const dataList=[
    'Transportation Services',
    'Private Beach Access',
    '24/7 Room Service',
    'Free Wi-Fi Connectivity'
]
</script>