<script lang="ts">
	/**
	 * Icon component for Material Symbols Rounded.
	 *
	 * Convention:
	 * - By default renders filled version (FILL 1).
	 * - Pass name ending in "_outline" (e.g. "mail_outline") to get the outline
	 *   variation. The "_outline" suffix is stripped before using it as the
	 *   ligature and forces FILL 0.
	 *
	 * The icon_names list in the Google Fonts link must be kept in alphabetical
	 * order and use the real ligature names (mobile, mail, etc.).
	 */
	let {
		name,
		size = 24,
		class: className = ''
	}: {
		name: string;
		size?: number;
		class?: string;
	} = $props();

	const isOutline = $derived(name.endsWith('_outline'));
	const ligature = $derived(isOutline ? name.slice(0, -8) : name);
	const fontVariationSettings = $derived(isOutline ? "'FILL' 0" : "'FILL' 1");
</script>

<span
	class="material-symbols-rounded align-middle {className}"
	style:font-size="{size}px"
	style:font-variation-settings={fontVariationSettings}
	aria-hidden="true"
>
	{ligature}
</span>
