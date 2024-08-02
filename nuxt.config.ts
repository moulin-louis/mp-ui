import MonacoEditorWebpackPlugin from 'monaco-editor-webpack-plugin';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'shadcn-nuxt'],
  webpack: {
    plugins: [
      new MonacoEditorWebpackPlugin({
        languages: ['javascript'],
        features: ['browser'],
      }),
    ],
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  plugins: [
    {
      src: './plugins/monaco-editor.client.ts',
      mode: 'client',
    },
  ],
});
