<script lang="ts">
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
	import { services } from '$lib/data/site';

	const currentPath = $derived($page.url.pathname);
</script>

<nav>
	<ul class="mt-10 flex list-none flex-wrap gap-x-1 gap-y-2 text-lg text-dl-green md:gap-x-2">
		<li>
			<a href={resolve('/services')} class="hover:underline">Services &gt;</a>
		</li>
		{#each services as service, i (service.routeName)}
			{@const isActive = currentPath.endsWith(service.routeName)}
			<li>
				<a
					href={resolve(`/services/${service.routeName}`)}
					class="hover:underline {isActive ? 'font-medium underline' : ''}"
				>
					{service.title}
				</a>
				{#if i < services.length - 1}
					<span class="mx-1 text-dl-primary/50">|</span>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
