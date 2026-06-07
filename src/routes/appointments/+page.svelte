<script lang="ts">
	import { onMount } from 'svelte';
	import Section from '$lib/components/Section.svelte';
	import Content from '../content/appointments.mdx';
	import Icon from '$lib/components/Icon.svelte';

	let message = $state({
		name: '',
		phone: '',
		email: '',
		message: ''
	});
	let sending = $state(false);
	let status: 'idle' | 'success' | 'error' = $state('idle');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		sending = true;
		status = 'idle';

		// Placeholder: in real use, integrate Netlify Forms, a server action, or external service (e.g. the original used Google Apps Script).
		// For now, simulate send and show success.
		await new Promise((r) => setTimeout(r, 600));

		if (message.email) {
			status = 'success';
		} else {
			status = 'error';
		}
		sending = false;
	}

	function resetForm() {
		message = { name: '', phone: '', email: '', message: '' };
		status = 'idle';
	}
</script>

<svelte:head>
	<title>Appointments | Dynamic Lymphatics</title>
</svelte:head>

<Section title="Appointments" topBorderColor="var(--color-dl-green)">
	<Content />

	{#if status === 'success'}
		<div class="mt-6 p-4 bg-green-50 border border-green-600 rounded">
			<p class="font-medium">Message sent successfully!</p>
			<p>A confirmation was sent to you at {message.email}. We will respond soon. Thank you.</p>
			<button class="mt-2 underline" onclick={resetForm}>Send another message</button>
		</div>
	{:else}
		{#if status === 'error'}
			<p class="text-red-600">There was a problem sending the message. Please try again.</p>
		{/if}

		<form onsubmit={handleSubmit} class="mt-6 max-w-xl border rounded p-6">
			<div class="mb-4 text-lg font-medium bg-dl-green/70 text-white px-4 py-2 rounded-t -mx-6 -mt-6">
				Send a message here:
			</div>

			<div class="space-y-4">
				<label class="block">
					<span class="text-sm">Name</span>
					<input
						bind:value={message.name}
						type="text"
						class="mt-1 block w-full rounded border p-2"
						required
					/>
				</label>

				<label class="block">
					<span class="text-sm">Phone</span>
					<input
						bind:value={message.phone}
						type="tel"
						class="mt-1 block w-full rounded border p-2"
					/>
				</label>

				<label class="block">
					<span class="text-sm">Email</span>
					<input
						bind:value={message.email}
						type="email"
						class="mt-1 block w-full rounded border p-2"
						required
					/>
				</label>

				<label class="block">
					<span class="text-sm">Message</span>
					<textarea
						bind:value={message.message}
						rows={4}
						class="mt-1 block w-full rounded border p-2"
						required
					></textarea>
				</label>
			</div>

			<button
				type="submit"
				disabled={sending}
				class="mt-4 px-6 py-2 bg-dl-green/70 text-white rounded disabled:opacity-50"
			>
				{sending ? 'Sending...' : 'Send'}
			</button>
		</form>
	{/if}
</Section>