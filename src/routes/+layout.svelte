<script lang="ts">
	import './layout.css';
	import { SITE_NAME } from '$lib/data/site';
	import Heading from '$lib/components/Heading.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();

	// Scroll position (0 at top → 1 after ~50px scroll). Owned here so both
	// the transforming Heading and the fixed Navbar can react.
	let scrollPosition = $state(0);

	// Scroll-driven state for the heading brand + navbar.
	// Using $effect + addEventListener is the standard pattern for window scroll
	// (a $derived cannot react to native window events).
	$effect(() => {
		const START = 50; // pixels before we consider "fully scrolled"

		const onScroll = () => {
			const y = window.scrollY;
			scrollPosition = y < START ? y / START : 1;
		};

		// Seed initial value (important for hydration / direct deep links)
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<svelte:head>
	<link rel="icon" href="/assets/favicon.svg" />
	<title>{SITE_NAME}</title>
	<meta
		name="description"
		content="Dynamic Lymphatics provides lymphatic drainage therapy (lymphatic massage) from Trish Romano, CLT, a Casley-Smith certified practitioner."
	/>
</svelte:head>

<div class="h-150">
	<Heading position={scrollPosition} />
	<Navbar position={scrollPosition} />
</div>

{@render children()}

<!-- Footer (simple port of original) -->
<footer class="h-30 bg-dl-primary/80">
	<div class="mx-auto flex h-full max-w-7xl items-center px-6 text-sm text-white/70">
		<div>
			© {new Date().getFullYear()}
			{SITE_NAME}, LLC
		</div>
	</div>
</footer>
