<script lang="ts">
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';

	let { measurementId }: { measurementId: string } = $props();

	// Load gtag only on the client
	let loaded = $state(false);

	$effect(() => {
		if (typeof window === 'undefined' || !measurementId) return;

		// Inject the gtag script
		const script = document.createElement('script');
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
		document.head.appendChild(script);

		// Initialize gtag
		window.dataLayer = window.dataLayer || [];
		const gtag: NonNullable<Window['gtag']> = (...args: unknown[]) => {
			window.dataLayer.push(args as [string, ...unknown[]]);
		};
		window.gtag = gtag;

		gtag('js', new Date());
		gtag('config', measurementId, {
			// Send page_view manually so we can control it on client navigation
			send_page_view: false
		});

		loaded = true;
	});

	// Track page views on client-side navigation
	onNavigate(() => {
		if (!loaded || typeof window === 'undefined' || !window.gtag) return;

		window.gtag('event', 'page_view', {
			page_path: page.url.pathname + page.url.search,
			page_location: page.url.href,
			page_title: document.title
		});
	});
</script>
