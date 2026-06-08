<script lang="ts">
	import Welcome from '../../content/welcome.mdx';
</script>

<div class="welcome mb-12 w-full">
	<Welcome />
</div>

<style>
	/* Styles for the welcome MDX section on home (rendered inside (home)/HomeContact.svelte) */
	.welcome {
		:global {
			h1 {
				font-family: var(--font-dl-title);
				font-size: 2.5rem;
				font-weight: 500;
				margin-bottom: 0.25rem;
			}

			li {
				font-size: 1.15rem;
				margin-bottom: 0.25rem;
				padding-left: 1.75em;
				position: relative;

				&::before {
					content: 'spa';
					font-family: 'Material Symbols Rounded';
					font-variation-settings: 'FILL' 1;
					position: absolute;
					left: 0;
					top: 0.1em;
					line-height: 1;
				}
			}

			a {
				color: #0066cc;
				text-decoration: underline;
			}
		}
	}
</style>
