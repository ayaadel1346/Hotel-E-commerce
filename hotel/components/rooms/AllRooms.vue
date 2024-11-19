<template>
    <main class="container-fluid lg:container mx-5 lg:mx-auto py-[7%]">

        <h2 class="md:text-[20px] text-[16px] text-center text-darkAccent font-bold ">Rooms & Suites</h2>

        <h1 class="md:text-[25px] mt-3 text-[18px] font-serif lg:text-[50px] text-center text-black ">
            Our Exquisite Rooms & Suites Collection

        </h1>

      <section class="grid mt-[80px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="flex flex-col justify-start relative group rounded-[15px] shadow-2xl items-start overflow-hidden">
          <NuxtImg
            src="https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsfGVufDB8fDB8fHww"
            width="80"
            height="80"
            alt="image"
            class="rounded h-[300px] w-full"
          />
  
          <h1 class="text-black px-4 font-bold text-[20px] md:text-[23px] mt-5 lg:text-[30px]">
            Deluxe room
          </h1>
  
          <p class="text-gray px-4 pb-5  text-[16px] md:text-[18px] my-3 lg:text-[20px]">
            Price: $200 | Capacity: 5
          </p>
  
         
          <div class="absolute bg-[#00000077] inset-0 flex justify-center items-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/50 text-white text-[30px] font-bold text-lg"
          >
            <NuxtLink to="/" class="text-white   hover:text-black flex justify-center gap-1 items-center p-2 rounded w-[120px] bg-accent hover:bg-white transition-all duration-300 ease-in-out">
                <Icon :size="25" name="ic:baseline-remove-red-eye" />  View
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
  </template>
  