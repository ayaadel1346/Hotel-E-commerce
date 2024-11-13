<template>

    <nav class="container-fluid py-5 bg-primaryDark border-b-[1px] border-darkGray">

        <section class="lg:container mx-5 lg:mx-auto h-full flex lg:flex-row flex-col lg:justify-between 
                        lg:items-center text-[18px] text-white font-medium">


         <aside class=" flex lg:flex-row flex-col lg:justify-evenly  lg:items-center justify-start items-start">
            
            <span class="flex items-center"> 
              <Icon :size="35" name="mdi:map-marker" class="text-accent mr-2" /> 
              <p class="hover-line">
                123th ElMansour-Street, Cairo.
              </p>
            </span>

            <span class="flex items-center lg:mx-5 my-5 lg:my-0">
              <Icon :size="35" name="mdi:phone" class="text-accent mr-2" />
                <p class="hover-line"> 000 123 456 789</p>
            </span>
             
         </aside>


         <aside>

             <NuxtLink 
             class="lg:min-w-[200px]  w-[200px] group after:bg-white  before:bg-white cursor-pointer mt-5 z-0  font-semibold   text-[16px] md:text-[20px] overflow-hidden  flex justify-center items-center bg-accent button-reverse p-3">
              <span class="text-white transition-all duration-300 ease-out group-hover:text-black z-10">
                Book Now
              </span>
             </NuxtLink>
        
         </aside>
            

        </section>

    </nav>
      
</template>