<template>
    <main class="card-container">
    
      <div class="skeleton-card">
        <div class="skeleton-image"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-text"></div>
      </div>
  
    </main>
</template>
  
  
  
  <style scoped>
  
  .skeleton-card {
    width: 100%;
    margin: 10px;
    padding: 20px;
    background: #f0f0f0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    animation: skeleton-shimmer 2s infinite ease-in-out, skeleton-fade 2.5s infinite ease-in-out;
  }
  
  
  .skeleton-image {
    width: 100%;
    height: 200px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    border-radius: 10px;
    animation: shimmer 1.5s infinite ease-in-out;
  }
  
  
  .skeleton-text {
    width: 100%;
    height: 20px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    border-radius: 5px;
    animation: shimmer 1.5s infinite ease-in-out;
  }
  
  
  .skeleton-text:nth-child(2) {
    width: 80%;
  }
  
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  @keyframes skeleton-shimmer {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
  
  @keyframes skeleton-fade {
    0% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.7;
    }
  }
  
  .card {
    width: 100%;
    max-width: 400px;
    margin: 10px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  
  
  .card-text {
    margin-top: 10px;
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .card-description {
    font-size: 1rem;
    color: #555;
  }
  </style>
  