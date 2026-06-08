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
				<div class="place-card">
					<div class="top-row">
						<div class="place-desc-large">
							<div class="place-name">Dynamic Lymphatics</div>
							<div class="address">${FULL_ADDRESS}</div>
						</div>
						<div class="navigate">
							<a target="_blank" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(FULL_ADDRESS)}" class="navigate-link">
								<i class="material-symbols-rounded">call_split</i>
								Directions
							</a>
						</div>
					</div>
					<div class="bottom-actions">
						<a target="_blank" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}">
							View larger map
						</a>
					</div>
				</div>
			`;

			// Make popup slightly narrower than the actual map container (especially important on mobile)
			const containerWidth = node.offsetWidth || 400;
			const popupMinWidth = Math.max(200, Math.min(280, Math.floor(containerWidth * 0.85)));
			const popupMaxWidth = Math.max(280, Math.min(480, Math.floor(containerWidth * 0.92)));

			const popup = L.popup({
				minWidth: popupMinWidth,
				maxWidth: popupMaxWidth,
				closeButton: true
			}).setContent(popupHtml);
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

<div class="location-section">
	<div class="mx-auto flex max-w-4xl flex-col items-center px-8 pt-16">
		<div class="blurred-white p-2">
			<h1 class="mb-8 text-center font-dl-title text-3xl">Where to Find Us</h1>
		</div>

		<div class="blurred-white mx-auto mb-6 text-center" style="max-width: 600px; height: 120px;">
			<p>
				Located in south Davis County, serving the Greater Salt Lake Area.
				<br /><br />
				Treatments are by appointment only, please text or call {PHONE}
			</p>
		</div>

		<div class="map">
			<div class="blurred-white mx-auto prose mb-6 text-center">
				<p class="blurred-white mx-auto prose mb-6 pl-3.5 text-center">
					<strong>Address:</strong>
					{FULL_ADDRESS}
				</p>
			</div>
			<div
				{@attach initLeafletMap}
				class="my-6"
				style="height: 400px; width: 95%; max-width: 600px; margin: 0 auto;"
			></div>
		</div>
	</div>
</div>

<style>
	.location-section {
		position: relative;
		min-height: 700px;
		padding-bottom: 20px;
		border-radius: 90% 0 0 0 / 150px 0 0 0;
		border-top: 12px solid rgba(102, 153, 102, 0.8);
	}

	.location-section::after {
		content: '';
		position: absolute;
		z-index: -2;
		height: calc(100% + 10px);
		width: 100%;
		top: -10px;
		left: 0;
		background-image:
			linear-gradient(rgba(0, 119, 136, 0.6), rgba(0, 119, 136, 0.6)),
			url(/assets/stones-76525_1280.jpg);
		background-size: cover;
		background-position: center;
		border-radius: 90% 0 0 0 / 150px 0 0 0;
	}

	.blurred-white {
		position: relative;
		padding: 10px;
		color: #000;
	}

	.blurred-white::after {
		content: '';
		position: absolute;
		z-index: -1;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background: rgba(255, 255, 255, 0.6);
		filter: blur(40px);
	}

	.map {
		:global {
			.leaflet-popup-content {
				.place-card {
					color: #5b5b5b;
					cursor: default;
					font-family: var(--font-dl-body);
				}

				.top-row {
					display: flex;

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
						display: inline-flex;
						flex-direction: column;
						vertical-align: top;
						text-align: center;
						height: 43px;
						padding: 0 7px;

						i {
							font-size: 30px;
							color: #3a84df;
						}

						.navigate-link {
							display: inline-flex;
							flex-direction: column;
							color: #3a84df;
							text-decoration: none;

							&:visited {
								color: #3a84df;
							}
						}
					}
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

			@media (max-width: 640px) {
				.leaflet-popup {
					max-width: 320px;
				}

				.leaflet-control-container .leaflet-top.leaflet-left {
					top: unset;
					bottom: 0;
				}
			}
		}
	}
</style>
