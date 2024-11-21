<template>

   <main class="container-fluid overflow-hidden  py-[10%] ">

    <section  class="flex lg:container container-fluid px-5 lg:px-0 lg:mx-auto flex-col lg:flex-row lg:justify-between lg:items-center">

        <aside 
         v-motion-slide-visible-once-left  
         class="duration-2000  ease-out w-full lg:w-[40%] md:flex md:flex-col md:justify-center md:items-center lg:items-start lg:justify-start ">

            <SharedTemplateSharedStartText :aboutPropsData="aboutPropsData"/>

            <p class="text-darkGray text-[25px] font-signature">
                Aya...the Owner
            </p>

        </aside>



        <aside class="w-full relative lg:mt-0 mt-[50px]  lg:w-[40%]">
            <v-parallax
                src="https://images.unsplash.com/photo-1563629986-97c92e385f66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDQyfHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D"
                alt="image"
                class="rounded w-full h-[300px] md:w-[80%] md:mx-auto lg:mx-0 lg:w-full md:h-[600px] ">
            </v-parallax>
            

            <NuxtImg
                src="https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsfGVufDB8fDB8fHww"
                width="450"
                height="300"
                alt="image"
                class="rounded absolute bottom-[50px] left-[-20%]  hidden lg:block  shadow-2xl  shadow-white/40"
            />
        
        </aside>


    </section>

   </main>

</template>

<script setup>
const aboutPropsData = {
    title:' About us',
    subTitle:' Tailored services and the experience of unique holidays',
    description:' Our mission is to provide exceptional service, exquisite accommodations,and an experience that feels like a home away from home. Whether you’re here for a short stay or a long-term visit, we strive to make every guest feel welcomed and well cared for.'
}
</script>