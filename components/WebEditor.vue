<script lang="ts" setup>
import { Check, ChevronsUpDown } from 'lucide-vue-next';
import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  type SandpackPredefinedTemplate,
  SandpackPreview,
  SandpackProvider,
} from 'sandpack-vue3';

import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { avaibleTemplates } from '../constants/framework';

const frameworks: { value: SandpackPredefinedTemplate; label: string }[] = avaibleTemplates.map(
  (it: SandpackPredefinedTemplate) => {
    const label = it as string;
    label[0].toUpperCase();
    return { value: it, label };
  },
);

const open = ref(false);
const value = ref('react');
</script>

<template>
  <div :key="value">
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button variant="outline" role="combobox" :aria-expanded="open" class="w-[200px] justify-between">
          {{ value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..." }}
          <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-[200px] p-0">
        <Command>
          <CommandInput class="h-9" placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              <CommandItem v-for="framework in frameworks" :key="framework.value" :value="framework.value" @select="(ev) => {
                if (typeof ev.detail.value === 'string') {
                  value = ev.detail.value
                }
                open = false
              }">
                {{ framework.label }}
                <Check :class="cn(
                  'ml-auto h-4 w-4',
                  value === framework.value ? 'opacity-100' : 'opacity-0',
                )" />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    <div class="h-80 m-2">
      <SandpackProvider theme="light" :template="value" :options="{
        showConsole: true,
        showConsoleButton: true,
        activeFile: '/index.js',
      }">
        <SandpackLayout>
          <SandpackFileExplorer />
          <SandpackCodeEditor closableTabs showTabs showLineNumbers />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  </div>
</template>
