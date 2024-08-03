<script lang="ts" setup>
import type { VueMonacoEditor } from '@guolao/vue-monaco-editor';

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
};

const code = ref('x = 42;\nconst y = (x) => {\n\tconsole.log(z)\n}\n');
</script>

<template>
  <div class="h-80 m-2">
    <VueMonacoEditor v-model:value="code" theme="vs-dark" :options="MONACO_EDITOR_OPTIONS" language="javascript" />
  </div>
</template>
