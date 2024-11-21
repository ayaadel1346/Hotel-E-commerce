<template>

    <main class=" container-fluid py-[7%]">

     <h1 class="md:text-[60px] mt-5 text-[35px] text-black font-extrabold leading-[50px] text-center">
          Services
     </h1>


     <section class="grid lg:h-[130vh] h-full mt-5  md:mt-[70px] grid-cols-1 lg:grid-cols-3">

        <aside class="grid-col-1  h-full">

            <div class=" lg:h-2/5 py-10  bg-whiteGray w-full flex-col justify-center items-center">
            
                 <h1 class="text-[35px] lg:text-[55px]  mx-5 text-center font-bold text-darkGray leading-[50px]">
                   <span class="inline lg:block mx-1">Room</span>Cleaning
                 </h1> 

                 <p class="text-darkGray mx-5  my-10 text-[18px] md:text-[20px] leading-[30px] md:leading-[35px]">
                    Our goal is to make your stay as comfortable and enjoyable as possible, with rooms that feel fresh, safe, and
                    well-maintained every time you return. If there’s anything more you need, please feel free to let our team know
                 </p>
            
            </div>


            <div class="w-full lg:h-3/5  rounded-tr-[30%]">
                <NuxtImg 
                src="https://www.11-76.com/themes/luxex/luxex/img/about/services/2.jpg"
                width="200"
                height="70"
                class="w-full h-full lg:rounded-bl-[15%]"
               />
            </div>

        </aside>



        <section>

            <div class="w-full lg:h-3/5 bg-whiteGray">

                <NuxtImg 
                src="https://www.11-76.com/themes/luxex/luxex/img/about/services/3.jpg"
                width="200"
                height="70"
                class="w-full h-full  lg:rounded-tr-[15%]"
                />
    
            </div>


            <div class=" lg:h-2/5 py-10  bg-whiteGray w-full flex-col justify-center items-center">

                 <h1 class="lg:text-[55px] text-[35px]   mx-5 text-center font-bold text-darkGray leading-[50px]">
                    <span class="lg:block inline mx-1">Free</span>  Parking
                 </h1> 

                 <p class="text-darkGray mx-5  my-10 text-[18px] md:text-[20px] leading-[30px] md:leading-[35px]">
                    we are pleased to offer complimentary parking for our guests, making your stay even more convenient and stress-free. 
                    Our spacious and secure parking facilities are available at no additional cost,
                     providing you with easy access to your vehicle throughout your stay.
                </p>

            </div>


        </section>


        <aside>

            <div class=" lg:h-2/5 py-10 bg-whiteGray w-full flex-col justify-center items-center">

                 <h1 class="lg:text-[55px] text-[35px]   mx-5 text-center font-bold text-darkGray leading-[50px]">
                    <span class="lg:block inline mx-1">Secure</span>  Vault
                 </h1> 

                 <p class="text-darkGray mx-5  my-10 text-[18px] md:text-[20px] leading-[30px] md:leading-[35px]">
                    we understand the importance of keeping your valuables safe and secure during your stay. 
                    Our secure vault service offers a reliable solution for storing your most precious belongings with complete peace of mind.
                 </p>

            </div>


            <div class="w-full lg:h-3/5">

                <NuxtImg 
                src="https://www.11-76.com/themes/luxex/luxex/img/about/services/4.jpg"
                width="200"
                height="70"
                class="w-full h-full lg:rounded-br-[15%]"
               />

           </div>

        </aside>


     </section>

       
    </main>

</template>