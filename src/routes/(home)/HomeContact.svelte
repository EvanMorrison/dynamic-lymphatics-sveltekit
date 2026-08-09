<script lang="ts">
	import { resolve } from '$app/paths';
	import Icon from '$lib/components/Icon.svelte';
	import { PHONE, TRISH_PORTRAIT } from '$lib/data/site';
</script>

<div class="contact-grid">
	<img src={TRISH_PORTRAIT} alt="Trish Romano, CLT" class="portrait" />

	<div class="name-block">
		<div class="contact-headline">Founder & Principal Care Provider</div>
		<div class="contact-name">
			<strong>Trish Romano</strong>, <small>CLT LMT</small>
		</div>
	</div>

	<!-- Contact details use inner grid for icon + text alignment.
	     Outer grid repositions this block:
	     - Desktop: under the name (right column, beside lower photo)
	     - Mobile: full width below photo + name -->
	<div class="details contact-details">
		<Icon name="call" size={18} />
		<div>{PHONE}</div>

		<Icon name="pin_drop" size={18} />
		<div>224 S Main Street, Suite 205</div>

		<div></div>
		<div>
			Centerville, UT 84014<br />
		</div>
	</div>
</div>
<p>Treatments by appointment only</p>

<p class="mt-8 w-full">
	Learn more about Trish on the <a href={resolve('/about')} class="text-blue-600 hover:underline">
		About
	</a> page
</p>

<style>
	.contact-grid {
		display: grid;
		grid-template-columns: 150px 1fr;
		gap: 0 2rem;
		align-items: start;
	}

	/* Desktop: details sit under the name in the right column (beside lower photo) */
	.contact-grid {
		grid-template-areas:
			'photo name'
			'photo details';
	}

	.portrait {
		grid-area: photo;
		display: block;
		width: 150px;
		height: 200px;
		border-radius: 5px;
	}

	.name-block {
		grid-area: name;
	}

	.details {
		grid-area: details;

		/* Inner 2-column grid for icon | text rows. Replaces the old table. */
		display: grid;
		grid-template-columns: 22px 1fr;
		row-gap: 0.125rem;
		column-gap: 0.5rem;
		align-items: center;
	}

	/* Mobile: move the details block full-width below the photo+name row */
	@media (max-width: 500px) {
		.contact-grid {
			grid-template-areas:
				'photo name'
				'details details';
			gap: 0.5rem 1rem;
		}

		.details {
			margin-top: 0.25rem;
		}
	}

	.contact-headline,
	.contact-details {
		font-size: 1.25em;
		font-weight: 300;
	}

	.contact-name {
		font-size: 2.8em;
		line-height: 1em;

		strong {
			font-weight: 700;
		}

		@media (max-width: 500px) {
			font-size: 1.8rem;
		}
	}

	@media (max-width: 500px) {
		.contact-headline {
			font-size: 0.8em;
		}

		.contact-details {
			font-size: 1.2rem;
		}
	}
</style>
