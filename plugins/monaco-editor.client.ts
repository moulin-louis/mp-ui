import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueMonacoEditorPlugin, {
    paths: {
      vs: '/monaco-editor/min/vs',
    },
  });
});
