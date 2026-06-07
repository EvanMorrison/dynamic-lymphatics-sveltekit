<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { aboutNav } from '$lib/data/site';

	const currentPath = $derived(page.url.pathname);
</script>

<nav>
	<ul class="mt-10 flex list-none flex-wrap gap-x-1 gap-y-2 text-lg text-dl-green md:gap-x-2">
		<li>
			<a href={resolve('/about')} class="hover:underline">About &gt;</a>
		</li>
		{#each aboutNav as item, i (item.routeName)}
			{@const isActive = currentPath.endsWith(item.routeName)}
			<li>
				<a
					href={resolve(`/about/${item.routeName}`)}
					class="hover:underline {isActive ? 'font-medium underline' : ''}"
				>
					{item.title}
				</a>
				{#if i < aboutNav.length - 1}
					<span class="mx-1 text-dl-primary/50">|</span>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
