<script lang="ts">
	import { FULL_ADDRESS, PHONE } from '$lib/data/site';
</script>

<svelte:head>
	<title>Location | Dynamic Lymphatics</title>
</svelte:head>

<div class="mx-auto max-w-4xl p-8">
	<h1 class="mb-4 font-dl-title text-3xl">Where to Find Us</h1>

	<div class="mb-6 rounded border-2 border-red-600 p-4">
		<h2 class="font-semibold">We Are Moving To Utah!</h2>
		<p>
			We are excited to announce we are relocating to Utah and will be serving the Greater Salt Lake
			Area.
			<br /><br />
			Treatments are by appointment only, please text or call {PHONE}
		</p>
	</div>

	<div class="prose">
		<p><strong>Address:</strong> {FULL_ADDRESS}</p>
		<p>Treatments by appointment only.</p>

		<!-- Map placeholder - original used Google Maps widget with hardcoded key.
		     Per plan, map implementation is deferred. We can add Leaflet or embed later.
		-->
		<div class="my-6 flex h-64 items-center justify-center border bg-gray-100 text-gray-500">
			[Interactive map placeholder - e.g. Leaflet + OSM or Google Maps embed]
			<br />
			Current address: {FULL_ADDRESS}
		</div>
	</div>
</div>
