// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-08-04',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'shadcn-nuxt', 'nuxt-security', 'nuxt-open-fetch'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  openFetch: {
    clients: {
      component: {
        baseURL: 'http://localhost:3000/api/component',
        schema: './server/openapi/component/openapi.yaml',
      },
    },
  },
  security: {
    corsHandler: false,
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
      contentSecurityPolicy: {
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        'connect-src': ["'self'"],
      },
    },
  },
  vite: {
    define: {
      'process.env.LOG': {},
    },
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
});
