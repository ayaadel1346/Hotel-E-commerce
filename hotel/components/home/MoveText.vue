<template>

    <main class="container-fluid p-7  bg-primaryDark overflow-hidden">

        <h1 class="text-accent text-[30px] md:text-[40px] whitespace-nowrap animate-scroll font-serif font-bold uppercase tracking-wide">
            Step into a world of comfort and elegance at our hotel, where every detail is crafted to offer a peaceful escape. 
        </h1>
        
    </main>

</template>


<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(100%); 
    }
    50% {
        transform: translateX(0); 
    }
    100% {
        transform: translateX(-100%);
    }
}

.animate-scroll {
    animation: scroll 30s linear infinite; 
}
</style>
