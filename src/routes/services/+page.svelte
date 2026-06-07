<script lang="ts">
	import ServicesSubnav from '$lib/components/ServicesSubnav.svelte';
	import Section from '$lib/components/Section.svelte';
	import Content from '../../content/services.mdx';
</script>

<svelte:head>
	<title>Services | Dynamic Lymphatics</title>
</svelte:head>

<Section title="Services" topBorderColor="var(--color-dl-green)">
	{#snippet nav()}
		<ServicesSubnav />
	{/snippet}

	<div class="services-content">
		<Content />
	</div>
</Section>

<style>
	/* Styles for the services page MDX content wrapper */
	.services-content {
		:global {
			ul {
				li {
					line-height: 2em;

					&::before {
						content: 'spa';
						font-family: 'Material Symbols Rounded';
						font-variation-settings: 'FILL' 1;
						vertical-align: middle;
						margin-right: 10px;
					}
				}
			}

			a {
				font-size: 1.25rem; /* matching text-xl from card titles */
				font-weight: 500;
				color: var(--color-dl-primary);
			}

			a:hover {
				color: var(--color-dl-green);
			}
		}
	}
</style>
