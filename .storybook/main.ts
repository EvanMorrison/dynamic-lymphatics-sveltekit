import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  "stories": [
    // Explicitly only load Svelte CSF story files.
    // This prevents Storybook from auto-discovering .mdx files (both the old React Configure.mdx
    // and the app's src/content/*.mdx which are for mdsvex/SvelteKit routes, not Storybook).
    {
      directory: '../src',
      files: '**/*.stories.@(js|ts|svelte)',
    },
  ],
  "addons": [
    "@storybook/addon-svelte-csf",
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/sveltekit"
};
export default config;