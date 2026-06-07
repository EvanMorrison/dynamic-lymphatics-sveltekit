<script lang="ts">
	import Welcome from '../../content/welcome.mdx';
</script>

<div class="welcome mb-12 w-full">
	<Welcome />
</div>

<style>
	/*
  Content / MDX typography styles.
  These are kept global because they style elements produced by child components
  (mdsvex-rendered .mdx content, slotted children, etc.) rather than elements that
  exist directly in a component's template. The component owns its own "chrome"
  styles in its <style> tag; these provide the rich-text defaults inside it.
*/

	/* Styles for the welcome MDX section on home (rendered inside (home)/HomeContact.svelte) */
	.welcome {
		:global {
			h1 {
				font-family: var(--font-dl-title);
				font-size: 2.5rem;
				font-weight: 500;
				margin-bottom: 0.25rem;
			}

			p {
				font-size: 1.1em;
				line-height: 1.6;
				max-width: 38em;
			}

			ul {
				margin-left: 1.5rem;
				margin-top: 0.5rem;
			}

			li {
				margin-bottom: 0.25rem;

				&::before {
					content: 'spa';
					font-family: 'Material Symbols Rounded';
					font-variation-settings: 'FILL' 1;
					vertical-align: middle;
					margin-right: 10px;
				}
			}

			a {
				color: #0066cc;
				text-decoration: underline;
			}
		}
	}
</style>
