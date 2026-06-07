import type { Preview } from '@storybook/sveltekit';

// Import global styles so that custom classes like .section, .section-title,
// .section-body etc. (from the migration of the original design) render correctly
// inside Storybook previews.
import '../src/routes/layout.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo'
		}
	}
};

export default preview;
