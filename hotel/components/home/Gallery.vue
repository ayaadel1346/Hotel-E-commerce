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
    "https://media.istockphoto.com/id/1353440472/photo/elegant-bedroom-interior-with-double-bed-night-tables-armchair-and-seaview-through-window.jpg?s=612x612&w=0&k=20&c=ntz6FRYlNNoLcEjFDoxIFpQxVa-dLfjtUlZccqz58vU=",
    "https://media.istockphoto.com/id/962023854/photo/sunrise-in-a-luxurious-villa-with-swimming-pool-in-bali.jpg?s=612x612&w=0&k=20&c=hjQih7gbgUCvA9MbsBGrf4WoThqpc3vvy5GmOC1FXo0=",
    "https://media.istockphoto.com/id/503016934/photo/entrance-of-luxury-hotel.jpg?s=612x612&w=0&k=20&c=DXFzucB2xWGf3PI6_yjhLKDvrFcGlOpOjXh6KDI8rqU=",
    "https://media.istockphoto.com/id/2151936106/photo/businessman-working-in-hotel-room.jpg?s=612x612&w=0&k=20&c=d-j5r8DQCv7o1u1mbbmhutZsokNJzjjvmdvp8ykN7Rc=",
    "https://media.istockphoto.com/id/1191193185/photo/couple-of-business-travelers-checking-in-to-a-hotel.jpg?s=612x612&w=0&k=20&c=KbJvvqYCCBG8Jgz8gVHqwp3hjdaRsg8IYC16KMPHK5s=",
    "https://media.istockphoto.com/id/157525171/photo/villa-sunrise.jpg?s=612x612&w=0&k=20&c=l5eQDGar2pVuGOsuBoNYyUsPs1BPZ4_JmPMubVkC-vE=",
    "https://media.istockphoto.com/id/94390726/photo/endless-hotel-corridor.jpg?s=612x612&w=0&k=20&c=KmpH3Z6okpWrM_XWtDi0Pt7lOr9dt_wnDm3PsKQTiw8=",
    "https://media.istockphoto.com/id/1385185506/photo/side-view-of-luxury-hotel-room-with-two-beds-chair-and-potted-plant.jpg?s=612x612&w=0&k=20&c=sO6nXqY-aFsST-dLFLiP3fzlsDOU-R1hQ-PetQ-_kKI="
]);
</script>

