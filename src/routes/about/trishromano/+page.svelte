<script lang="ts">
	import AboutSubnav from '$lib/components/AboutSubnav.svelte';
	import Section from '$lib/components/Section.svelte';
	import Content from '../../../content/about.mdx';
	import { TRISH_PORTRAIT } from '$lib/data/site';
</script>

<svelte:head>
	<title>Trish Romano, CLT | About | Dynamic Lymphatics</title>
</svelte:head>

<Section title="About Trish Romano" topBorderColor="var(--color-dl-green)">
	{#snippet nav()}
		<AboutSubnav />
	{/snippet}

	<img src={TRISH_PORTRAIT} alt="Trish Romano, CLT" class="float-left mr-5 mb-2 w-170" />

	<Content />
</Section>
