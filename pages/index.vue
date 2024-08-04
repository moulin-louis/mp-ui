<script setup lang="ts">
const onClick = () => {
  console.log('hello');
};
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
