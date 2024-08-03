<script setup lang="ts">
const onClick = () => {
  console.log('hello');
};
</script>

<template>
  <div class="m-auto pt-4">
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <Card>
          <CardContent>
            <WebEditor />
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
