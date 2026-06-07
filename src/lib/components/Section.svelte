<script lang="ts">
	/**
	 * Reusable content section replicating the original's organic curved styling,
	 * title with divider, optional subnav, and body content.
	 * Used by services and about pages.
	 *
	 * Props:
	 * - title: section heading
	 * - topBorderColor: CSS color for the top border (e.g. 'var(--color-dl-green)')
	 * - bgImage: optional image src for decorative background treatment
	 */
	let {
		title,
		topBorderColor,
		bgImage,
		nav,
		children
	}: {
		title?: string;
		topBorderColor?: string;
		bgImage?: string;
		nav?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
	} = $props();

	const hasTopBorder = $derived(!!topBorderColor);
</script>

<div class="section" class:has-top-border={hasTopBorder} style:border-top-color={topBorderColor}>
	<!-- Optional nav (e.g. Subnav) passed as snippet -->
	{@render nav?.()}

	{#if title}
		<h1 class="section-title">{title}</h1>
	{/if}

	<div class="section-body">
		{#if bgImage}
			<img src={bgImage} alt="" class="section-image" />
		{/if}
		{@render children?.()}
	</div>
</div>

<style>
	/* Reusable Section for content pages (ported from original SectionStyle) */
	.section {
		position: relative;
		width: 100%;
		max-width: 1440px;
		overflow-x: hidden;
		min-height: calc(100vh - 270px);
		margin: 0 auto;
		padding: 50px 10%;
		border-radius: 100% 0 0 0 / 100px 0 0 0;
		border: none;

		&.has-top-border {
			border-top: 8px solid; /* color provided via inline style on the element */
		}

		/* Title + divider */
		.section-title {
			position: relative;
			font-family: var(--font-dl-title);
			font-weight: 500;
			font-size: 3.3rem;
			margin: 1em 0 1em;
			transition: all 0.2s ease-out;

			&::after {
				content: '';
				display: block;
				border-color: var(--color-dl-divider);
				border-width: 0.5px;
				margin-top: 6px;
				border-style: solid;
			}

			@media (max-width: 667px) {
				font-size: 2.5rem;
			}
		}

		/* Body container (positioning context for absolutely positioned children like section-image) */
		.section-body {
			margin-bottom: 100px;
			position: relative;
		}

		/* Optional bg image treatment (for pages like lymphaticSystem) */
		.section-image {
			position: absolute;
			top: 0;
			opacity: 0.7;
			z-index: -1;
			width: auto;
			height: auto;
			max-width: 380px;
			max-height: 100%;

			@media (min-width: 900px) {
				right: 0;
			}

			@media (max-width: 899px) {
				left: 15%;
			}
		}
	}
</style>
