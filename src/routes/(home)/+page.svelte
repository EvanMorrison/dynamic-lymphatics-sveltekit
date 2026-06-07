<script lang="ts">
	import { SITE_NAME } from '$lib/data/site';
	import HomeHero from './HomeHero.svelte';
	import HomeContact from './HomeContact.svelte';
</script>

<svelte:head>
	<title>{SITE_NAME} | Home</title>
</svelte:head>

<HomeHero />
<HomeContact />
