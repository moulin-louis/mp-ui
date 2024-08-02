<script setup lang="ts">
const onClick = () => {
  console.log('hello');
};
</script>

<template>
  <div class="m-auto">
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <Card>
          <CardContent class="h-80">
            Web Editor
          </CardContent>
        </Card>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <Card>
          <CardContent class="h-80">
            DOM Preview
          </CardContent>
        </Card>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>
