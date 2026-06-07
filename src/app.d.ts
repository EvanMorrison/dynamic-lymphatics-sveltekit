// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

/// <reference types="@sveltejs/kit" />

// Pull in ambient declarations from the dedicated mdx.d.ts file using
// import style (as recommended by TypeScript / Svelte language server).
// This file exists separately because app.d.ts must remain a module
// (due to the `export {};` below) for SvelteKit's App namespace augmentation.
import type {} from './mdx.d.ts';

// Ambient declarations for .md/.mdx (mdsvex) live in src/mdx.d.ts
// so this official SvelteKit file can keep its required `export {};`.

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
