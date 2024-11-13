<template>

    <nav class="sticky top-0 z-40  transition-all duration-300 ease-out container-fluid w-full p-5 bg-primaryDark border-b-[1px] border-darkGray">
  
       <HeaderMobileHeader/>

       <section class="container  lg:flex justify-between items-center mx-auto hidden ">
   
        <aside class="w-1/2 h-full">

            <span class="flex  justify-start items-center">

                <Icon :size="35" name="mdi:home" class="text-accent mr-2" /> 

                <p class="hover-line text-accent text-[35px] font-bold ">
                    Hotera
                </p>

            </span>
            
        </aside>


        <aside class="w-1/2 h-full">
        
          <div class="flex justify-around h-full items-center text-white text-[20px]">
            
            <NuxtLink 
            v-for="(link,index) in links"
            :key="index"
            :to="link.src"
             class="reverse-lines py-2 hover:text-accent" >
             {{link.name}}
            </NuxtLink>

          </div>

        </aside>

       </section>      

    </nav>

</template>


<script setup>
const links = useState('mainLinks',()=> [
   {
      src: '/',
      name: 'Home'
   },
   {
      src: '/about',
      name: 'About'
   },
   {
      src: '/rooms',
      name: 'Rooms'
   },
   {
      src: '/contact',
      name: 'Contact Us'
   },
   {
      src: '/login',
      name: 'Create Account'
   }
])
</script>

