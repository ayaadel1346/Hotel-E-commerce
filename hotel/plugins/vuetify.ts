// vuetify plugin (vuetify.js or vuetify.ts)
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
   
  })
  app.vueApp.use(vuetify)
})
