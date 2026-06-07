<script lang="ts">
	import { resolve } from '$app/paths';
	import Icon from '$lib/components/Icon.svelte';
	import { PHONE, EMAIL, TRISH_PORTRAIT } from '$lib/data/site';
</script>

<div class="flex items-start gap-8">
	<img src={TRISH_PORTRAIT} alt="Trish Romano, CLT" class="portrait" />

	<div class="flex-1">
		<div class="contact-headline">Founder & Principal Care Provider</div>
		<div class="contact-name">
			<strong>Trish Romano</strong>, CLT LMT
		</div>
		<div class="contact-headline">
			<table>
				<tbody>
					<tr>
						<td><Icon name="call" size={18} /></td>
						<td class="pl-3">{PHONE}</td>
					</tr>
					<tr>
						<td><Icon name="mail_outline" size={18} /></td>
						<td class="pl-3">
							<a href="mailto:{EMAIL}">{EMAIL}</a>
						</td>
					</tr>
					<tr>
						<td><Icon name="pin_drop" size={18} /></td>
						<td class="pl-3">224 S Main Street, Suite 205</td>
					</tr>
					<tr>
						<td></td>
						<td class="pl-3">
							Centerville, UT 84014<br />
							Treatments by appointment only
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>

<p class="mt-8 w-full">
	Learn more about Trish on the <a href={resolve('/about')} class="text-blue-600 hover:underline">
		About
	</a> page
</p>

<style>
	.portrait {
		display: block;
		flex-basis: 150px;
		width: 150px;
		height: 200px;
		border-radius: 5px;
	}

	.contact-headline {
		font-size: 1.25em;
		font-weight: 300;

		@media (max-width: 500px) {
			font-size: 1em;
		}
	}

	.contact-name {
		font-size: 3.2em;
		line-height: 1em;

		strong {
			font-weight: 700;
		}

		@media (max-width: 500px) {
			font-size: 1.9em;
		}
	}
</style>
