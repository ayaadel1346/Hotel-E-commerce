import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  build: {
    transpile: ['vuetify'],
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
    'shadcn-nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  typescript: {
    typeCheck: true
  },
  colorMode: {
    classSuffix: '', 
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
