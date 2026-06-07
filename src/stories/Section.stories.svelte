<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Section from '$lib/components/Section.svelte';
	import { services } from '$lib/data/site';
	import { resolve } from '$app/paths';

	const { Story } = defineMeta({
		title: 'Layout/Section',
		component: Section,
		tags: ['autodocs']
	});
</script>

<Story name="Default" parameters={{ layout: 'fullscreen' }}>
	<Section title="Example Section" topBorderColor="var(--color-dl-green)">
		<p>
			This demonstrates the original site's curved container (top-left border-radius) + top accent
			border, followed by the section title (in script font) with its divider, then the body
			content.
		</p>
		<p>
			Additional paragraph to show the spacing and max-width rules ported from the original design.
			The component is intended for the services and about content pages.
		</p>
	</Section>
</Story>

<Story name="With Nav">
	<Section title="Services" topBorderColor="var(--color-dl-green)">
		{#snippet nav()}
			<nav>
				<ul class="flex list-none flex-wrap gap-x-1 gap-y-2 text-lg text-dl-green md:gap-x-2">
					<li><a href={resolve('/services')} class="hover:underline">Services &gt;</a></li>
					{#each services as service, i (service.routeName)}
						<li>
							<a href={resolve(`/services/${service.routeName}`)} class="hover:underline">
								{service.title}
							</a>
							{#if i < services.length - 1}
								<span class="mx-1 text-dl-primary/50">|</span>
							{/if}
						</li>
					{/each}
				</ul>
			</nav>
		{/snippet}
		<p>
			When a nav snippet is provided (e.g. the Services or About subnav), it appears above the
			title, matching the structure used on the real content pages.
		</p>
		<p>The subnav is a responsive horizontal list with active states and pipe separators.</p>
	</Section>
</Story>

<Story name="With Background Image" parameters={{ layout: 'fullscreen' }}>
	<Section
		title="The Lymphatic System"
		topBorderColor="var(--color-dl-green)"
		bgImage="/assets/woman-lymphatic-system-full-body.jpg"
	>
		<p>
			This variant shows the optional faded background image treatment (positioned to the right on
			wide screens, left on narrow ones, with reduced opacity). Used on pages like the original "The
			Lymphatic System" section.
		</p>
	</Section>
</Story>
