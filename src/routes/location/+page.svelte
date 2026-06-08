<script lang="ts">
	import 'leaflet/dist/leaflet.css';
	import { FULL_ADDRESS, PHONE } from '$lib/data/site';

	function initLeafletMap(node: HTMLDivElement) {
		(async () => {
			const L = (await import('leaflet')).default;

			// Fix default marker icons (Leaflet issue with bundlers).
			// `_getIconUrl` is an internal/private method that Leaflet adds at runtime.
			// It is intentionally not declared in the public `@types/leaflet` definitions,
			// so there is no proper type we can import for it.
			// @ts-expect-error - internal Leaflet property
			delete L.Icon.Default.prototype._getIconUrl;
			L.Icon.Default.mergeOptions({
				iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
				iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
				shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
			});

			// Approx center for 224 S Main Street, Ste 205, Centerville, UT 84014
			const center: [number, number] = [40.9184, -111.879];

			const map = L.map(node).setView(center, 13);

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			const marker = L.marker(center).addTo(map);

			const popupHtml = `
				<div class="place-card place-card-large">
					<div class="place-desc-large">
						<div class="place-name">Dynamic Lymphatics</div>
						<div class="address">${FULL_ADDRESS}</div>
					</div>
					<div class="navigate">
						<a target="_blank" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(FULL_ADDRESS)}" class="navigate-link">
							Directions
						</a>
					</div>
					<div class="bottom-actions">
						<a target="_blank" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}">
							View larger map
						</a>
					</div>
				</div>
			`;

			const popup = L.popup({ minWidth: 300, closeButton: true }).setContent(popupHtml);
			marker.bindPopup(popup).openPopup();

			marker.on('click', () => {
				marker.openPopup();
			});
		})();
	}
</script>

<svelte:head>
	<title>Location | Dynamic Lymphatics</title>
</svelte:head>

<div class="mx-auto max-w-4xl p-8">
	<h1 class="mb-4 font-dl-title text-3xl">Where to Find Us</h1>

	<div class="mb-6 rounded">
		<p>
			Located in south Davis County, serving the Greater Salt Lake Area.
			<br /><br />
			Treatments are by appointment only, please text or call {PHONE}
		</p>
	</div>

	<div class="map prose">
		<p class="pl-3.5"><strong>Address:</strong> {FULL_ADDRESS}</p>

		<div
			{@attach initLeafletMap}
			class="my-6"
			style="height: 400px; width: 95%; max-width: 600px; margin: 0 auto;"
		></div>
	</div>
</div>

<style>
	.map {
		:global {
			.leaflet-popup-content {
				.place-card {
					color: #5b5b5b;
					font-size: 12px;
					cursor: default;
					font-family: var(--font-dl-body);

					&.place-card-large {
						padding: 9px 4px 9px 0;
						min-width: 300px;
					}
				}

				.place-desc-large {
					width: 200px;
					display: inline-block;

					.place-name {
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						font-weight: 500;
						font-size: 14px;
						color: #000000;
					}

					.address {
						margin-top: 6px;
					}
				}

				.navigate {
					display: inline-block;
					vertical-align: top;
					text-align: center;
					height: 43px;
					padding: 0 7px;

					.navigate-link {
						color: #3a84df;
						text-decoration: none;

						&:visited {
							color: #3a84df;
						}
					}
				}

				.navigate-text {
					margin-top: 5px;
					text-align: center;
					font-size: 12px;
					max-width: 55px;
				}

				.bottom-actions {
					padding-top: 15px;

					a {
						color: #3a84df;
						text-decoration: none;
						font-family: var(--font-dl-body);

						&:visited {
							color: #3a84df;
						}
					}
				}
			}
		}
	}
</style>
