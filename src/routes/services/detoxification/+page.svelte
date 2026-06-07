<script lang="ts">
	import ServicesSubnav from '$lib/components/ServicesSubnav.svelte';
	import Section from '$lib/components/Section.svelte';
	import Content from '../../../content/detoxification.mdx';
</script>

<svelte:head>
	<title>Detoxification | Services | Dynamic Lymphatics</title>
</svelte:head>

<Section title="Detoxification" topBorderColor="var(--color-dl-green)">
	{#snippet nav()}
		<ServicesSubnav />
	{/snippet}

	<Content />
</Section>
