<template>

    <main>

       <section class="hidden lg:block">

        <header class="absolute top-[10%] left-[30%] border-[1px] leading-[60px] p-5 border-accent
                       z-30 h-[75%] w-[40%] bg-[rgba(255, 255, 255, 0.297)] rounded-t-[50%] backdrop-blur-lg 
                       shadow-[0px_4px_15px rgba(255,215,0,0.6)] flex flex-col items-center justify-center">

            <h1  v-motion-slide-visible-once-left  class="text-[45px] duration-2000  font-serif mt-8 font-extrabold text-center text-accent" >
                Welcome to Hotera
            </h1>

            <p  v-motion-slide-visible-once-right  class="mt-6 text-white duration-2000 leading-[50px] text-center text-gray-800 text-[17px]">
              {{captions[currentCaptionIndex]}}
            </p>

        </header>

       </section>




      <header class=" block lg:hidden absolute md:top-[35%] top-[30%] left-[1%] w-full">

          <h1 class="md:text-[53px]  font-serif text-[30px] mt-8 font-extrabold text-center text-accent" >
            Welcome to Hotera
          </h1>

          <p 
           class="mt-6 text-white p-3 leading-[50px] text-center text-gray-800 md:text-[23px] text-[16px] font-semibold" 
           style="font-family: 'Lora', serif;">
            {{captions[currentCaptionIndex]}}
          </p>

      </header>


    </main>

</template>


<script setup>
const captions = ref([
  'Experience the ultimate luxury and relaxation by the sea.',
  'Unwind in paradise with breathtaking ocean views.',
  'Escape to tranquility and luxury at our beachfront haven.',
  'Savor the perfect blend of comfort and nature.'
]);


const currentCaptionIndex = ref(0);

let captionInterval;

const updateCaption = () => {
  currentCaptionIndex.value = (currentCaptionIndex.value + 1) % captions.value.length;
};

onMounted(() => {
  captionInterval = setInterval(updateCaption, 3000); 
});


onUnmounted(() => {
  clearInterval(captionInterval); 
});

</script>


