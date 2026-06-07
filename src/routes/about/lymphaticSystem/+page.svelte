<script lang="ts">
	import AboutSubnav from '$lib/components/AboutSubnav.svelte';
	import Section from '$lib/components/Section.svelte';
	import Content from '../../../content/lymphaticSystem.mdx';
</script>

<svelte:head>
	<title>The Lymphatic System | About | Dynamic Lymphatics</title>
</svelte:head>

<Section
	title="The Lymphatic System"
	topBorderColor="var(--color-dl-green)"
	bgImage="/assets/woman-lymphatic-system-full-body.jpg"
>
	{#snippet nav()}
		<AboutSubnav />
	{/snippet}

	<Content />
</Section>
