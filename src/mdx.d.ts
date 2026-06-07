// Ambient declarations for mdsvex-processed Markdown files.
// These allow importing .md and .mdx files as Svelte components.
//
// IMPORTANT: This file must NOT contain `export {};` at the bottom.
// It is deliberately a script (not a module) so that the top-level
// `declare module` statements act as true ambient declarations
// (visible globally to the TypeScript program).
//
// We keep this in a separate file (instead of inside app.d.ts) precisely
// because src/app.d.ts requires `export {};` for SvelteKit's global
// `App` namespace augmentation to work correctly.
//
// In app.d.ts we pull these declarations in using the modern import style:
//   import type {} from './mdx.d.ts';
// (triple-slash references are discouraged for local .d.ts files).

declare module '*.md' {
	import type { Component } from 'svelte';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const component: Component<Record<string, any>>;
	export default component;
}

declare module '*.mdx' {
	import type { Component } from 'svelte';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const component: Component<Record<string, any>>;
	export default component;
}
