<script lang="ts">
	import ServicesSubnav from '$lib/components/ServicesSubnav.svelte';
	import Section from '$lib/components/Section.svelte';
	import Content from '../../../content/breastImplantIllness.mdx';
</script>

<svelte:head>
	<title>Breast Implant Illness | Services | Dynamic Lymphatics</title>
</svelte:head>

<Section title="Breast Implant Illness" topBorderColor="var(--color-dl-green)">
	{#snippet nav()}
		<ServicesSubnav />
	{/snippet}

	<Content />
</Section>
