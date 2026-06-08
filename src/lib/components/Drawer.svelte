<script lang="ts">
	/**
	 * Mobile slide-in drawer.
	 * Ported from original navbar/components/drawer.js
	 */
	let {
		open = false,
		closeDrawer,
		children
	}: {
		open?: boolean;
		closeDrawer?: () => void;
		children?: import('svelte').Snippet;
	} = $props();
</script>

<!-- Overlay -->
{#if open}
	<div class="fixed inset-0 z-[9999] bg-black/50" onclick={closeDrawer} role="presentation"></div>
{/if}

<!-- Drawer panel -->
<div
	class="fixed top-0 z-[10000] h-full w-250 overflow-y-auto bg-white transition-[left] duration-300"
	style:left={open ? '0' : '-250px'}
>
	{@render children?.()}
</div>
