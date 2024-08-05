import { SANDBOX_TEMPLATES, type SandpackPredefinedTemplate } from 'sandpack-vue3';

export const avaibleTemplates: SandpackPredefinedTemplate[] = [];
for (const key of Object.keys(SANDBOX_TEMPLATES)) {
  //filter out non free-template
  if (key === 'nextjs' || key === 'astro' || key === 'node' || key.startsWith('vite')) continue;
  //filter unwanted/broken template
  if (key === 'solid' || key === 'test-ts') continue;
  avaibleTemplates.push(key as SandpackPredefinedTemplate);
}
