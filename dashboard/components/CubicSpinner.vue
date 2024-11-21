<template>
    <main class="spinner-wrapper h-[50vh] flex flex-col justify-center gap-6 items-center">
      <div class="spinner">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
      </div>

      <p>loading .....</p>
    </main>
  </template>
  
  <style scoped>
 
  .spinner-wrapper {
    position: relative; 
    overflow: hidden;
  }
  
 
  .spinner {
    position: relative;
    width: 50px;
    height: 50px;
    transform-style: preserve-3d;
    animation: spin 1.5s linear infinite;
  }
  

  .cube {
    position: absolute;
    width: 50px;
    height: 50px;
    background: #ffd28d;
    border: 2px solid #efa73c;
    opacity: 0.9;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }
  
  .cube:nth-child(1) {
    transform: rotateX(0deg) translateZ(25px);
  }
  
  .cube:nth-child(2) {
    transform: rotateY(90deg) translateZ(25px);
  }
  
  .cube:nth-child(3) {
    transform: rotateY(180deg) translateZ(25px);
  }
  
  .cube:nth-child(4) {
    transform: rotateY(-90deg) translateZ(25px);
  }
  
  .cube:nth-child(5) {
    transform: rotateX(90deg) translateZ(25px);
  }
  
  .cube:nth-child(6) {
    transform: rotateX(-90deg) translateZ(25px);
  }
  
 
  @keyframes spin {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
  </style>
  