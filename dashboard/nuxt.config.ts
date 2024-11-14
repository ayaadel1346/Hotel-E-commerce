export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  build: {
   
  },
  devtools: { enabled: true },
  css: [
    '~/assets/css/global.css'
  ],
  modules: [
    '@pinia/nuxt', 
    '@nuxtjs/tailwindcss',  
    '@nuxt/icon', 
    '@nuxt/image', 
    '@nuxtjs/color-mode',
  ],
  typescript: {
    typeCheck: true
  },
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
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap'
        },
      ]
    }
  }
})
