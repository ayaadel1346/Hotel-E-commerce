
<template>
    
 <main class="container-fluid  bg-primaryDark overflow-hidden ">

    <section class="container-fluid overflow-hidden lg:container lg:mx-auto  mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
     
     <div class="flex flex-col lg:items-center lg:border-r-[1px] p-7 lg:border-gray relative top-down-line ">

        <h1 class="text-accent font-bold lg:text-[30px] text-[23px] leading-[50px]">     
        Contacts
        </h1>

        <p class="text-white lg:text-[16px] text-[18px] mt-5 leading-[30px]">
         Sahl Hasheesh, Hurghada ,<br/> Red Sea Governorate, Egypt
        </p>

        <NuxtLink
          to="mailto:Hotera@gmail.com" 
          class="text-white lg:text-[20px] text-[18px] mt-5 leading-[30px]">
          <span class="hover-line py-2">Hotera@gmail.com</span>
        </NuxtLink>

     </div>



     <div class="flex flex-col lg:items-center  lg:border-r-[1px] p-7 lg:border-gray relative top-down-line">

      <h1 class="text-accent font-bold lg:text-[30px] text-[23px] leading-[50px]">     
         Explore
      </h1>


      <NuxtLink
      v-for="(exploreLink,index) in exploreLinks"
      :key="index"
      :to="exploreLink.src" class="text-white lg:text-[20px] text-[18px] mt-5 leading-[30px]">
        <span class="hover-line py-2">{{exploreLink.name}}</span>
      </NuxtLink>

     </div>



     <div class="flex flex-col lg:items-center p-7">

         <h1 class="text-accent font-bold lg:text-[30px] text-[23px] leading-[50px]">     
            Newsletter
         </h1>


         <form>

            <input 
             class="p-3 mt-5 rounded" 
             type="text" 
             placeholder="Email"/>

            <button 
               type="submit" 
               class="lg:w-full w-[190px] mt-5 text-white flex justify-center items-center bg-accent reverse-lines-dark p-3">
               Submit
            </button>

         </form>

         </div>


    </section>


    <section class=" border-t-[1px] lg:border-gray ">
      
      <div class=" p-3 flex flex-col lg:flex-row lg:justify-between lg:items-center  lg:container lg:mx-auto text-[16px] text-white  leading-[40px]">
       
       <aside>
         <h5 class="mx-5 md:mx-0">
         Copyright © 2024 Hotera Website
        </h5>
       </aside>

       <aside>
         <span 
          class="md:mx-2 mx-5" 
          v-for="(link,index) in links" 
          :key="index">

            <NuxtLink 
            :to="link.src"
            :class="[index===(links.length-1)?'':'md:border-r-[2px] md:border-gray ','md:px-5  hover:text-accent transition-all duration-300 ease-out']">
            {{ link.name }}
            </NuxtLink>

         </span>
       </aside>

    </div>

    </section>

 </main> 



</template>



<script setup>
const links = [
   {
      src: '/',
      name: 'FAQ'
   },
   {
      src: '/',
      name: 'Terms of Use'
   }, 
   {
      src: '/',
      name: 'Privacy Policy'
   }
]


const exploreLinks=[
  {
    src:'/',
   name:'home'
  },
  {
    src:'/rooms',
   name:'Rooms'
  },
  {
    src:'/about',
   name:'About'
  }
]
</script>



<style scoped>
.top-down-line::after {
    content: '';
    position: absolute;
    top: 0;
    right: -1.5px;
    width: 2px;
    height: 20%; 
    background: linear-gradient(to top,#e4bb7d,#978667, rgba(0, 0, 0, 0.818));
    border-radius: 20px;
    animation: slide-down 2s linear infinite;
}


@keyframes slide-down {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(300px);
    }
}
</style>