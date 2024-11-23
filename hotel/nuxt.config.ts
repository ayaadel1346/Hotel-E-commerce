export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  build: {
   
  },
  devtools: { enabled: true },
  css: [
    '~/assets/css/global.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss', 
    '@vueuse/motion/nuxt', 
    '@nuxt/icon', 
    '@nuxt/image', 
    '@nuxtjs/color-mode', 
  ],
  colorMode: {
    classSuffix: '',  
  },
  vite: {
    vue: {
      template: {
      
      },
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'preload',
          href: 'https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'"
        },
        {
          rel: 'preload',
          as: 'image',
          href:'/images/1.webp',
        },
        {
          rel: 'preload',
          as: 'image',
          href:'/images/slider3-home1-1.webp',
        },
        {
          rel: 'preload',
          as: 'image',
          href:'/images/4.webp',
        },
      ]
    }
  }
})
