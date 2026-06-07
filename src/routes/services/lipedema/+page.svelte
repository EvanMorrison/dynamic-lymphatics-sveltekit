<script lang="ts">
	import ServicesSubnav from '$lib/components/ServicesSubnav.svelte';
	import Section from '$lib/components/Section.svelte';
	import Content from '../../../content/lipedema.mdx';
</script>

<svelte:head>
	<title>Lipedema | Services | Dynamic Lymphatics</title>
</svelte:head>

<Section title="Lipedema" topBorderColor="var(--color-dl-green)">
	{#snippet nav()}
		<ServicesSubnav />
	{/snippet}

	<Content />
</Section>