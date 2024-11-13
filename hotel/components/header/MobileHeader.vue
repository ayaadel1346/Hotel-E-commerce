<template>

    <main>

      <aside class="lg:hidden w-full flex justify-end items-center">
        
        <button 
          @click="toggleSidebar" 
          class="text-accent">
          <Icon :size="35" name="mdi:menu" />
        </button>

      </aside>

    <transition name="sidebar">

        <section 
         v-if="sidebarOpen" 
         class="fixed block lg:hidden inset-0 bg-gray-800 bg-opacity-75 z-50">

             <aside class="fixed top-0 left-0 w-64 h-full bg-primaryDark p-5 flex flex-col items-start text-white">

                    <button 
                        @click="toggleSidebar" 
                        class="text-accent mb-5 ">
                        <Icon :size="35" name="mdi:close" />
                    </button>

                    <NuxtLink 
                      v-for="(link,index) in links"
                      :key="index"
                      class="reverse-lines py-2 text-[20px] hover:text-accent mb-5" 
                      :to="link.src" 
                      @click="toggleSidebar">
                        {{link.name}}
                    </NuxtLink>


              </aside>

        </section>

    </transition>

    </main>

</template>


<script setup> 
const links = useState('mainLinks')

const sidebarOpen=useState('sidebarOpen',()=>false);

const toggleSidebar = () => {
   sidebarOpen.value=!sidebarOpen.value;
};
</script>


<style scoped>
.sidebar-enter-active, .sidebar-leave-active{
    transition:opacity 0.6s ease-in-out , transform 0.6s ease-in-out;
}

.sidebar-enter{
    opacity: 0; 
    transform: translateX(-100%);
}

.sidebar-enter-to{
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.6s ease-in ,transform 0.6s ease-in
}
.sidebar-leave{
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.6s ease-out ,transform 0.6s ease-in
}
.sidebar-leave-to{
    opacity: 0; 
    transform: translateX(-100%);
}
</style>