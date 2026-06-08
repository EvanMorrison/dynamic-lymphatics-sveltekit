<script lang="ts">
	/**
	 * The large, scroll-reactive site heading/brand.
	 * Ported from original HeadingComponent.
	 * Shrinks, translates, and fades as the user scrolls (position 0 → 1).
	 * Reserves vertical space (~150px) at the top of the page.
	 */
	let { position = 0 }: { position?: number } = $props();

	const clamped = $derived(Math.min(Math.max(position, 0), 1));

	// Desktop formula from original (we apply a single responsive-friendly version)
	const scale = $derived(Math.max(1 - clamped, 0.75));
	const translateY = $derived(-23 * clamped);
	const translateX = $derived(-30 * clamped);

	const transform = $derived(
		`scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`
	);

	const opacity = $derived(clamped >= 0.999 ? 0 : 1);
</script>

<div class="mx-auto flex h-25 max-w-7xl flex-row" aria-hidden="true">
	<!-- 
		The fixed brand that transforms with scroll.
		z-[-1] so the big title sits "behind" the fixed navbar visually at the start.
		On scroll it shrinks and moves toward the top-left navbar area.
	-->
	<div
		class="fixed top-0 z-[-1] ml-27.5 flex h-25 min-w-[7em] origin-[-100px_top] flex-col justify-end transition-all duration-200 ease-out max-[550px]:ml-5 max-[550px]:text-[70%]"
		style:transform
		style:opacity
	>
		<!-- When not scrolled: default black text, 4em size (matching original BrandName) -->
		<h1 class="font-dl-title text-[4em] leading-none text-black max-[550px]:text-[2.8rem]">
			Dynamic Lymphatics
		</h1>
		<h3 class="pl-[0.7em] font-dl-body text-[1.1em] text-black/80 max-[550px]:text-[0.95em]">
			Lymphatic Drainage Therapy
		</h3>
	</div>
</div>
