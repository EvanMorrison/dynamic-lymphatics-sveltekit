<script lang="ts">
	import ServicesSubnav from '$lib/components/ServicesSubnav.svelte';
	import Section from '$lib/components/Section.svelte';
	import Content from '../../../content/wellness.mdx';
</script>

<svelte:head>
	<title>Wellness | Services | Dynamic Lymphatics</title>
</svelte:head>

<Section title="Wellness" topBorderColor="var(--color-dl-green)">
	{#snippet nav()}
		<ServicesSubnav />
	{/snippet}

	<Content />
</Section>
