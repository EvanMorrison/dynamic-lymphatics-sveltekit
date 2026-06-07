/**
 * Centralized site data for Dynamic Lymphatics.
 * Ported from the original Next.js appState.js + NavMenuData.js.
 * Single source of truth for nav, services, contact info, etc.
 */

export const SITE_NAME = 'Dynamic Lymphatics';
export const TAGLINE = 'Lymphatic Drainage Therapy';
export const PHONE = '310-283-9382';
export const EMAIL = 'trish@mt4w.com';
export const ADDRESS_LINES = ['224 S Main Street, Suite 205', 'Centerville, UT 84014'];
export const FULL_ADDRESS = '224 S Main Street, Ste 205, Centerville, UT 84014';

export const TRISH_PORTRAIT = '/assets/trish-170x228.jpg';

export const nav = [
	{
		label: 'Home',
		path: '/',
		icon: 'home',
		children: null
	},
	{
		label: 'Services',
		path: '/services',
		icon: 'accessibility',
		children: [
			{
				label: 'Wellness',
				path: '/services/wellness',
				icon: 'keyboard_arrow_right',
				children: null
			},
			{
				label: 'Lymphedema',
				path: '/services/lymphedema',
				icon: 'keyboard_arrow_right',
				children: null
			},
			{
				label: 'Lipedema',
				path: '/services/lipedema',
				icon: 'keyboard_arrow_right',
				children: null
			},
			{
				label: 'Surgeries',
				path: '/services/surgeries',
				icon: 'keyboard_arrow_right',
				children: null
			},
			{
				label: 'Detoxification',
				path: '/services/detoxification',
				icon: 'keyboard_arrow_right',
				children: null
			},
			{
				label: 'Breast Implant Illness',
				path: '/services/breastimplantillness',
				icon: 'keyboard_arrow_right',
				children: null
			}
		]
	},
	{
		label: 'About',
		path: '/about',
		icon: 'account_circle',
		children: [
			{
				label: 'Trish Romano, CLT',
				path: '/about/trishromano',
				icon: 'keyboard_arrow_right',
				children: null
			},
			{
				label: 'The Lymphatic System',
				path: '/about/lymphaticSystem',
				icon: 'keyboard_arrow_right',
				children: null
			}
		]
	},
	// Appointments intentionally not in primary nav (was commented in original)
	{
		label: 'Location',
		path: '/location',
		icon: 'pin_drop',
		children: null
	}
] as const;

export type NavItem = (typeof nav)[number];

export const services = [
	{
		title: 'Wellness',
		routeName: 'wellness',
		image: '/assets/water-1444951_1280.jpg', // fallback to available asset; original referenced missing /assets/images/...
		text: 'Lymphatic massage helps support ongoing wellness & vitality...'
	},
	{
		title: 'Lymphedema',
		routeName: 'lymphedema',
		image: '/assets/stones-76525_1280.jpg',
		text: 'Our Manual Lymphatic Drainage is a gold-standard support for lymphedema...'
	},
	{
		title: 'Lipedema',
		routeName: 'lipedema',
		image: '',
		text: ''
	},
	{
		title: 'Pre & Post Surgical',
		routeName: 'surgeries',
		image: '/assets/woman-lymphatic-system-full-body.jpg',
		text: 'Manual Lymphatic Drainage supports complete recovery from surgeries of all types...'
	},
	{
		title: 'Detoxification',
		routeName: 'detoxification',
		image: '',
		text: ''
	},
	{
		title: 'Breast Implant Illness',
		routeName: 'breastimplantillness',
		image: '',
		text: ''
	}
] as const;

export type Service = (typeof services)[number];
export type ServiceRouteName = Service['routeName'];

export const aboutNav = [
	{ title: 'Trish Romano, CLT', routeName: 'trishromano' },
	{ title: 'The Lymphatic System', routeName: 'lymphaticSystem' }
] as const;

/** Helper to get a service by routeName.
 *  Parameter is narrowed to the known literal route names (from the as const array).
 */
export function getService(routeName: ServiceRouteName): Service | undefined {
	return services.find((s) => s.routeName === routeName);
}
