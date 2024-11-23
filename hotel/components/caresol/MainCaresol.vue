<template>

  <main
    class="cube-container z-1 relative overflow-hidden"
    @mousemove="handleMouseMove"
    @mouseenter="isMouseOverMain = true"
    @mouseleave="isMouseOverMain = false"
  >

    <CaresolHeaderCaresol />


    <div
      v-if="isMouseOverMain"
      class="mouse-circle"
      :style="{ top: mouseY + '%', left: mouseX + '%' }"
    ></div>


    <section class="cube -z-40">
      <div
        v-for="(index) in 6"
        :key="index"
        :class="`face face-${index}`"
      >
        <div class="diagonal"></div>
      </div>
    </section>


    <aside class="flex lg:flex-col flex-row justify-center items-center z-50 absolute lg:top-[30%] top-[1%] left-[4%]">

      <div 
       v-for="icon in icons" 
       :key="icon.name" 
       class="flex items-center mt-2">

        <NuxtLink :to="icon.link">
          <Icon
            :name="icon.name"
            size="45"
            class="text-accent mr-2 hover:-translate-y-3 mt-5 transition-all duration-300 ease-out"
          />
        </NuxtLink>

      </div>

    </aside>

  </main>

</template>



<script setup>
const icons = useState("icons", () => [
  { name: "mdi:linkedin", link: "/linkedin" },
  { name: "mdi:facebook", link: "/facebook" },
  { name: "mdi:twitter", link: "/twitter" },
]);

const mouseX = useState("mouseX", () => 0);
const mouseY = useState("mouseY", () => 0);
const isMouseOverMain = useState("isMouseOverMain", () => false);

const handleMouseMove = (event) => {
  mouseX.value = (event.clientX / window.innerWidth) * 100;
  mouseY.value = (event.clientY / window.innerHeight) * 100;
};
</script>



<style scoped>
.cube-container {
  perspective: 1500px;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/1.webp');
  background-size: cover;
  background-position: center;
}

.mouse-circle {
  position: absolute;
  width: 70px;
  height: 70px;
  border: 2px solid var(--accent-color);
  border-radius: 50%;
  
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  z-index: 1000;
}

.cube {
  position: absolute;
  width: 100vw;
  height: 150vh;
  transform-style: preserve-3d;
  animation: rotate-and-scale 7s ease-out infinite;
}

@keyframes rotate-and-scale {
  0% {
    transform: rotateY(0deg) scale(1);
  }
  25% {
    transform: rotateY(90deg) scale(1.2);
  }
  50% {
    transform: rotateY(180deg) scale(1);
  }
  75% {
    transform: rotateY(270deg) scale(1.2);
  }
  100% {
    transform: rotateY(360deg) scale(1);
  }
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(53, 52, 52, 0.116);
  border: 2px solid rgba(43, 43, 43, 0.5);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.6;
}

.diagonal {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(9, 9, 9, 0.137);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  z-index: 1;
}

.face-1 {
  transform: rotateY(0deg) translateZ(80vh);
}
.face-2 {
  transform: rotateY(90deg) translateZ(80vh);
}
.face-3 {
  transform: rotateY(180deg) translateZ(80vh);
}
.face-4 {
  transform: rotateY(270deg) translateZ(80vh);
}
.face-5 {
  transform: rotateX(90deg) translateZ(80vh);
}
.face-6 {
  transform: rotateX(-90deg) translateZ(80vh);
}
</style>
