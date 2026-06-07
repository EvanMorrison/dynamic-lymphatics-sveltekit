<script lang="ts">
	import ServicesSubnav from '$lib/components/ServicesSubnav.svelte';
	import Section from '$lib/components/Section.svelte';
	import Content from '../../../content/lymphedema.mdx';
</script>

<svelte:head>
	<title>Lymphedema | Services | Dynamic Lymphatics</title>
</svelte:head>

<Section title="Lymphedema" topBorderColor="var(--color-dl-green)">
	{#snippet nav()}
		<ServicesSubnav />
	{/snippet}

	<Content />
</Section>
