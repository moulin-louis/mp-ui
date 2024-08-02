<script lang="ts" setup>
import { ref } from 'vue';

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
};

const code = ref('x = 42;\nconst y = (x) => {\n\tconsole.log(z)\n}\n');
</script>
<template>
  <vue-monaco-editor v-model:value="code" theme="vs-dark" :options="MONACO_EDITOR_OPTIONS" language="javascript" />
</template>
