<script lang="ts">
	/**
	 * Fixed top navbar with scroll-reactive styling (bg opacity, shadow, small brand fade).
	 * Includes desktop horizontal nav + hover dropdowns for sections with children,
	 * and mobile hamburger + slide drawer.
	 *
	 * Position prop: 0 (top of page) → 1 (scrolled past threshold).
	 */
	import { page } from '$app/state';
	import { nav, PHONE, SITE_NAME, TAGLINE } from '$lib/data/site';
	import { resolve } from '$app/paths';
	import Icon from './Icon.svelte';
	import Drawer from './Drawer.svelte';

	let { position = 0 }: { position?: number } = $props();

	const clamped = $derived(Math.min(Math.max(position, 0), 1));
	const isScrolled = $derived(clamped >= 1);

	// Colors driven by scroll position (match original theme behavior)
	const navBg = $derived(isScrolled ? 'rgba(51, 102, 51, 0.7)' : 'transparent');
	const navShadow = $derived(isScrolled ? '0 2px 4px rgba(51, 85, 51, 1)' : 'none');
	const navTextClass = $derived(isScrolled ? 'text-white' : 'text-dl-primary');
	const phoneClass = $derived(isScrolled ? 'text-white/90' : 'text-dl-primary/80');

	// Mobile drawer
	let isDrawerOpen = $state(false);

	function openDrawer() {
		isDrawerOpen = true;
	}
	function closeDrawer() {
		isDrawerOpen = false;
	}

	// Desktop hover submenu state (one at a time)
	let hoverLabel = $state<string | null>(null);

	function setHover(label: string | null) {
		hoverLabel = label;
	}

	// Small delay on leave so user can move pointer into the dropdown
	let leaveTimeout: ReturnType<typeof setTimeout> | null = null;

	function handleMouseLeave() {
		if (leaveTimeout) clearTimeout(leaveTimeout);
		leaveTimeout = setTimeout(() => {
			setHover(null);
		}, 120);
	}

	function handleMouseEnter(label: string) {
		if (leaveTimeout) {
			clearTimeout(leaveTimeout);
			leaveTimeout = null;
		}
		setHover(label);
	}

	// Active link logic (approximates original behavior)
	const currentPath = $derived(page.url.pathname);

	function isActive(item: { path: string; children?: readonly unknown[] | null }): boolean {
		if (currentPath === item.path) return true;
		if (item.children && currentPath.startsWith(item.path + '/')) return true;
		// Also highlight parent when on a child (e.g. /services/xxx)
		if (item.children && currentPath.split('/')[1] === item.path.split('/').pop()) {
			return true;
		}
		return false;
	}

	// When navigating from mobile drawer, close it
	function handleNavClick() {
		if (isDrawerOpen) closeDrawer();
	}

	/**
	 * Edge-aware positioning for desktop dropdowns.
	 * Keeps the menu left-aligned (relative to its trigger) in most cases,
	 * but flips it to right-aligned if it would overflow the right edge of the viewport.
	 */
	function alignDropdown(node: HTMLElement) {
		// Measure after the browser has painted the element
		requestAnimationFrame(() => {
			const rect = node.getBoundingClientRect();

			// If the right edge is off-screen (with a small safety margin)
			if (rect.right > window.innerWidth - 12) {
				node.style.left = 'auto';
				node.style.right = '0';
			} else {
				// Ensure clean state if it was previously flipped
				node.style.left = '';
				node.style.right = '';
			}
		});

		return {
			destroy() {
				// Element is removed from DOM when hover ends; no cleanup needed
			}
		};
	}
</script>

<nav
	class="fixed top-0 z-10 flex h-25 w-full items-center transition-all duration-200"
	style:background-color={navBg}
	style:box-shadow={navShadow}
	style:padding-left="12px"
	style:padding-right="12px"
>
	<div class="mx-auto flex w-full max-w-7xl items-center justify-between">
		<!-- Small brand that fades in when fully scrolled (replaces the big shrinking heading) -->
		<div
			class="flex items-baseline transition-opacity duration-200"
			class:opacity-0={!isScrolled}
			class:opacity-100={isScrolled}
		>
			<div class="flex flex-col">
				<div class="font-dl-title text-[2.25rem] leading-none text-white">
					{SITE_NAME}
				</div>
				<div class="pl-1.5 font-dl-body text-sm text-white/90">
					{TAGLINE}
				</div>
			</div>
		</div>

		<!-- Mobile/narrow view Call text - left aligned to match old site layout.
		     Hidden below 460px and only shown after the page has been scrolled (matching original behavior). -->
		<div
			class={`text-sm transition-all duration-200 max-[460px]:hidden lg:hidden ${phoneClass}`}
			class:opacity-0={!isScrolled}
			class:opacity-100={isScrolled}
		>
			Call: {PHONE}
		</div>

		<!-- Right side -->
		<div class="flex items-start gap-2">
			<!-- Desktop: Call stacked above the horizontal nav menu (only after scrolling, per original) -->
			<div class="hidden flex-col items-end lg:flex">
				<div
					class={`mb-px text-[0.9rem] leading-tight transition-all duration-200 ${phoneClass}`}
					class:opacity-0={!isScrolled}
					class:opacity-100={isScrolled}
					class:mb-0={!isScrolled}
					class:h-0={!isScrolled}
					class:overflow-hidden={!isScrolled}
				>
					Call: {PHONE}
				</div>

				<!-- Desktop nav (hidden below lg / ~1024px). No top-level icons on desktop (per original). -->
				<div class="hidden lg:block">
					<ul class={`flex list-none items-center gap-1 text-sm ${navTextClass}`}>
						{#each nav as item (item.path)}
							<li
								class="relative"
								onmouseenter={() => item.children && handleMouseEnter(item.label)}
								onmouseleave={handleMouseLeave}
							>
								<a
									href={resolve(item.path)}
									class={`flex items-center gap-1 rounded px-3 py-1.5 transition-colors hover:bg-dl-primary-lt/30 ${isActive(item) ? (isScrolled ? 'bg-white/20' : 'bg-dl-primary-lt/50') : ''}`}
									onclick={handleNavClick}
								>
									<!-- Icons hidden for main nav items on desktop; shown on mobile and inside dropdowns -->
									<span>{item.label}</span>
								</a>

								<!-- Desktop dropdown for sections with children (icons shown here) -->
								{#if item.children && hoverLabel === item.label}
									<div
										role="menu"
										tabindex="-1"
										class="absolute left-0 z-30 mt-1 min-w-55 overflow-hidden rounded bg-white shadow-lg ring-1 ring-black/5"
										style:max-height="320px"
										use:alignDropdown
										onmouseenter={() => setHover(item.label)}
										onmouseleave={handleMouseLeave}
									>
										<ul class="py-1 text-sm text-black">
											<!-- Parent link -->
											<li>
												<a
													href={resolve(item.path)}
													class="flex items-center gap-2 px-4 py-2 hover:bg-dl-primary-lt/60"
													onclick={handleNavClick}
												>
													<Icon name={item.icon} size={18} class="text-dl-primary" />
													<span class="font-medium">{item.label}</span>
												</a>
											</li>
											{#each item.children ?? [] as child (child.path)}
												<li>
													<a
														href={resolve(child.path)}
														class="flex items-center gap-2 px-4 py-1.5 pl-8 text-sm hover:bg-dl-primary-lt/40 {isActive(
															child
														)
															? 'font-medium text-dl-green'
															: ''}"
														onclick={handleNavClick}
													>
														<Icon name={child.icon} size={16} />
														<span>{child.label}</span>
													</a>
												</li>
											{/each}
										</ul>
									</div>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<!-- Mobile hamburger -->
			<button
				type="button"
				class={`flex h-10 w-10 items-center justify-center rounded text-2xl lg:hidden ${isScrolled ? 'text-white' : 'text-dl-primary'}`}
				onclick={openDrawer}
				aria-label="Open menu"
			>
				<Icon name="menu" size={26} />
			</button>
		</div>
	</div>
</nav>

<!-- Mobile Drawer -->
<Drawer open={isDrawerOpen} {closeDrawer}>
	<!-- Drawer header -->
	<div class="flex items-center bg-dl-primary/80 p-3 text-white">
		<div class="flex items-center gap-3">
			<div class="font-dl-title text-2xl">Dynamic Lymphatics</div>
		</div>
	</div>

	<!-- Full nav list (mobile always shows children expanded) -->
	<nav class="p-2 text-base text-dl-primary">
		<ul class="list-none">
			{#each nav as item (item.path)}
				<li class="mb-0.5">
					<a
						href={resolve(item.path)}
						class="flex items-center gap-2 rounded px-3 py-2 hover:bg-dl-primary-lt/40 {isActive(
							item
						)
							? 'font-medium text-dl-green'
							: ''}"
						onclick={handleNavClick}
					>
						<Icon name={item.icon} size={20} />
						<span>{item.label}</span>
					</a>

					{#if item.children}
						<ul class="ml-6 list-none border-l border-dl-primary/20 pl-2">
							{#each item.children as child (child.path)}
								<li>
									<a
										href={resolve(child.path)}
										class="flex items-center gap-2 rounded py-1.5 pl-2 text-[0.95em] hover:bg-dl-primary-lt/30 {isActive(
											child
										)
											? 'font-medium text-dl-green'
											: ''}"
										onclick={handleNavClick}
									>
										<Icon name={child.icon} size={16} />
										<span>{child.label}</span>
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</Drawer>
