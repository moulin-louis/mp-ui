<script setup lang="ts">
const { $component } = useNuxtApp();
$component('/components').then((res) => {
  console.log('x = ', res);
});
</script>

<template>
  <div class="m-auto pt-4">
    <Card>
      <CardContent>
        <WebEditor />
      </CardContent>
    </Card>
  </div>
</template>
