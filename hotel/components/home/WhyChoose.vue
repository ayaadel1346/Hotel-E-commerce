<template>

   <main class="container-fluid relative my-[7%] overflow-hidden py-[3.5%]">

      <NuxtImg 
       src="https://html.designingmedia.com/hillcrest/assets/images/choose-arrow.png"
       width="200"
       height="100"
       alt="arrow"
       class="absolute hidden lg:block z-20 w-[100%] top-0 right-0 animate-moveLeftRight"/>
        
     <v-parallax 
      src="https://templates.thememodern.com/theratio/images/slider/slider3-home1-1.jpg"
      class=" before:content-[''] before:absolute before:bottom-[-5px]  before:bg-white before:h-[6%] before:container 
              before:mx-auto   flex justify-center items-center  after:content-[''] after:absolute after:top-[-10px] 
            after:bg-white after:h-[6%] after:container after:mx-auto">
      
      <section 
       v-motion-pop-visible-once 
       class="duration-2000 lg:w-[67%] w-full lg:mx-auto rounded  p-10  lg:bg-white bg-[#1d1d1db3] container-fluid ">
              
         <h1 class="capitalize text-center md:leading-[50px] leading-[35px] font-bold lg:text-black text-white lg:text-[50px] md:text-[40px] text-[30px]">
            <span class=" border-l-[4px] border-darkAccent px-5">
               why choose us
            </span>
         </h1>

         <p class="my-5 md:text-[25px]  text-center text-[18px] text-white lg:text-darkGray md:leading-[45px] leading-[25px]">
            At <span class="lg:text-darkAccent text-accent">Hotera</span>, our guests are our top priority. Our attentive and dedicated staff are committed to making every moment of your stay memorable. From personalized check-in experiences to thoughtful concierge services.
         </p>

      </section>

     </v-parallax>

    </main>

</template>


