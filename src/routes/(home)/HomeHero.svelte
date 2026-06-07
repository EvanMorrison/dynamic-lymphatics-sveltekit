<script lang="ts">
	import { onMount } from 'svelte';

	let entered = $state(false);

	onMount(() => {
		setTimeout(() => {
			entered = true;
		}, 100);
	});
</script>

<div class="relative h-[calc(100vh-50px)] min-h-105">
	<div class="home-mask"></div>
	<div class="home-hero">
		<div class="subhead-block" class:entered style:top="15vh">
			<h2>
				The Lymphatic system maintains<br /> the dynamic balance of fluid in your body
			</h2>
		</div>
		<div class="subhead-block subhead-block-right" class:entered style:top="35vh">
			<h2>
				The flow of lymphatic fluid is essential<br />
				to body detoxification and immunity
			</h2>
		</div>
		<div class="subhead-block" class:entered style:top="55vh">
			<h2>
				Manual Lymphatic Drainage is a hands-on therapy<br /> for stimulation and support of these vital
				processes
			</h2>
		</div>
	</div>
</div>

<style>
	.home-hero {
		height: 100%;
		min-height: inherit; /* ensure it respects the parent's min-h-105 */
		position: relative;
		display: flex;
		flex-direction: row;
		padding: 80px 0 180px;
		justify-content: center;
		overflow: hidden;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			z-index: -1;
			background-image:
				url('/assets/water-1444951_1280.jpg'),
				linear-gradient(rgba(0, 119, 136, 0.6), rgba(0, 119, 136, 0.6));
			background-repeat: no-repeat;
			background-position: center center;
			background-size: cover;
			border-radius: 100% 0 0 0 / 100px 0 0 0;
			border-top: 12px solid var(--color-dl-green);
		}

		.subhead-block {
			position: absolute;
			width: 600px;
			max-width: 100%;
			height: 100px;
			transition: all 1.3s ease-in-out;
			border-radius: 50px;
			transform: translate(-400px, -200px) scale(0.5);
			opacity: 0;
			display: flex;
			justify-content: center;
			align-items: center;

			&::after {
				content: '';
				position: absolute;
				z-index: -1;
				filter: blur(50px);
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				background-color: rgba(0, 0, 0, 0.6);
				border-radius: 50px;
			}

			&.subhead-block-right {
				transform: translate(400px, -200px) scale(0.5);
			}

			&.entered {
				transform: translate(0, 0) scale(1);
				opacity: 1;
			}

			h2 {
				text-align: center;
				font-weight: 300;
				color: #ffffff;
			}

			@media screen and (max-width: 500px) {
				h2 {
					font-size: 12px;
					font-weight: 100;
				}
			}
		}
	}

	.home-mask {
		position: absolute;
		bottom: 0;
		background: #ffffff;
		height: 100px;
		width: 100%;
		border-top: 12px solid var(--color-dl-green);
		border-radius: 100% 0 0 0 / 100px 0 0 0;
	}
</style>
