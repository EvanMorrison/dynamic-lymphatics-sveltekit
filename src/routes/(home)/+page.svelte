<script lang="ts">
	import { SITE_NAME } from '$lib/data/site';
	import HomeHero from './HomeHero.svelte';
	import HomeContact from './HomeContact.svelte';
	import HomeWelcome from './HomeWelcome.svelte';
</script>

<svelte:head>
	<title>{SITE_NAME} | Home</title>
</svelte:head>

<HomeHero />
<main class="home-main">
	<HomeWelcome />
	<HomeContact />
</main>

<style>
	.home-main {
		flex-flow: wrap;
		position: relative;
		min-height: 500px;
		width: 95%;
		max-width: 1280px;
		margin: 20px auto;
		align-items: center;
		justify-content: flex-start;

		@media (max-width: 786px) {
			flex-direction: column;
			justify-content: flex-end;
			align-content: flex-end;
			align-items: flex-start;
		}

		@media (min-width: 768px) and (max-width: 1439px) {
			width: 80%;
		}

		:global(*) {
			transition: all 0.3s ease-out;
		}
	}
</style>
