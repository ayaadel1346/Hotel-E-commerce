<template>

  <main class="auth relative w-full min-h-[100vh] p-5 lg:p-0 flex lg:justify-between justify-center items-center 
              lg:min-h-[77.3vh] after:content-[''] after:absolute after:inset-0 after:bg-[#0000009a] after:-z-10 z-0">

    <aside class="lg:w-[40%] w-full z-10 lg:min-h-[69vh] md:min-h-[55vh] min-h-[78vh]  mt-3 lg:ml-3 rounded-md border-[5px]
                  border-accent relative overflow-hidden">

      <transition name="slide-fade" mode="out-in">

        <div v-if="!isRegistered">
          <AuthLoginComponent />
        </div>

        <div v-else>
          <AuthRegisterComponent />
        </div>

      </transition>

    </aside>


    <aside class="cube-container z-10 lg:w-[40%] lg:mx-10 h-[95%] lg:mt-3 lg:ml-3 rounded-md">

      <section class="cube  lg:block hidden ">

        <div
          v-for="(image, index) in images"
          :key="index"
          :class="`face face-${index + 1}`"
          :style="{ backgroundImage: `url(${image})` }"
        ></div>

      </section>

    </aside>

  </main>

</template>



<script setup>
const isRegistered = useState('isRegistered');

const images = [
'https://media.istockphoto.com/id/1792188989/photo/interior-design-of-a-modern-luxurious-spacious-hotel-indoor-lounge-with-an-indoor-pool.jpg?s=612x612&w=0&k=20&c=Taay-Jn8N4LbqXn6932hSm7hy0lnvy5xrAw4fx8OOLI=', 
'https://media.istockphoto.com/id/1409928624/photo/3d-rendering-3d-illustration-interior-scene-and-mockup-interior-render-bedroom-modern-style.jpg?s=612x612&w=0&k=20&c=1K23xPBXIo0KY6mgDs5DOllngRgDB_5XNXyyvFlG7YM=',
'https://media.istockphoto.com/id/2170450588/photo/interior-of-modern-light-gym-is-well-equipped-with-modern-machines-and-fitness-gear-offering.jpg?s=612x612&w=0&k=20&c=XCRJmw5R4oek_MioaTZa41Mof-dYTP9Hb3C1CKSkYHw=',
'https://media.istockphoto.com/id/1313754558/photo/3d-render-of-luxury-hotel-reception-and-lobby.jpg?s=612x612&w=0&k=20&c=6rwvW3_FYX96G8tqY85iyyeEwaDzxlEV_Ndrn6Iyd8c=',
'https://media.istockphoto.com/id/1977650658/photo/modern-hall-interior-with-reception-desk-in-hotel-with-wood-panel-and-moss-wall-concrete.jpg?s=612x612&w=0&k=20&c=YfZSnUNLqRdIhYqir0nZ6Q96Q329yS8qRMK4CpCrfGk=',
 'http://paul-themes.com/html/archiko/img/slider/architecture3.jpg',
];
</script>



<style scoped>

.auth {
  background-image: url('/images/hero-bg.webp');
  background-size: cover;
  background-repeat: no-repeat;
}

.cube-container {
  perspective: 1500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cube {
  position: relative;
  width: 50vh;
  height: 50vh;
  transform-style: preserve-3d;
  animation: rotate-cube 12s ease-in-out infinite;
}

@keyframes rotate-cube {
  0% {
    transform: rotateY(0deg) rotateX(0deg);
  }
  25% {
    transform: rotateY(90deg) rotateX(10deg);
  }
  50% {
    transform: rotateY(180deg) rotateX(0deg);
  }
  75% {
    transform: rotateY(270deg) rotateX(-10deg);
  }
  100% {
    transform: rotateY(360deg) rotateX(0deg);
  }
}

.face {
  position: absolute;
  width: 50vh;
  height: 50vh;
  background-size: cover;
  background-position: center;
  border: 2px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.face-1 { transform: rotateY(0deg) translateZ(25vh); }
.face-2 { transform: rotateY(90deg) translateZ(25vh); }
.face-3 { transform: rotateY(180deg) translateZ(25vh); }
.face-4 { transform: rotateY(-90deg) translateZ(25vh); }
.face-5 { transform: rotateX(90deg) translateZ(25vh); }
.face-6 { transform: rotateX(-90deg) translateZ(25vh); }

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.6s ease-out;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translate(-100%, 0%);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translate(0%, -100%);
}

</style>
