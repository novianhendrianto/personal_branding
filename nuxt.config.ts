// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      blogUrl: 'http://localhost:3020/',
      showBlog: false
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/brand-icon.svg?v=3' },
        { rel: 'shortcut icon', type: 'image/svg+xml', href: '/brand-icon.svg?v=3' }
      ]
    }
  }
})
