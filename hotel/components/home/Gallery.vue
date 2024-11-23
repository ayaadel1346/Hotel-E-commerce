<template>
    <main class="py-8 container mx-auto min-h-screen">

       
        <h1 class="text-center py-8 text- text-darkAccent font-bold text-5xl">
            <span class="border-b-2 font-signature  border-darkAccent pb-2">Gallery</span>
        </h1>

       
        <section class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            <div
                v-for="(image, index) in images"
                :key="index"
                class="overflow-hidden rounded-lg shadow-2xl cursor-pointer">
                <NuxtImg
                    :src="image"
                    :alt="'Image ' + (index + 1)"
                    class="w-full h-full object-cover hover:scale-[1.2] ease-out transition-transform duration-300"
                />
            </div>
            
        </section>

    </main>
</template>

<script setup>
const images = ref([
    "/images/istockphoto-1353440472-612x612.webp",
    "/images/istockphoto-962023854-612x612.webp",
    "/images/istockphoto-503016934-612x612.webp",
    "/images/istockphoto-2151936106-612x612.webp",
    "/images/istockphoto-1191193185-612x612.webp",
    "/images/istockphoto-157525171-612x612.webp",
    "/images/istockphoto-94390726-612x612.webp",
    "/images/istockphoto-1385185506-612x612.webp"
]);
</script>

