import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	ssr: {
		noExternal: ['style-value-types', 'popmotion', 'framesync']

	},
	kit: {
		adapter: adapter()
	},
	preprocess: vitePreprocess(),
	images: {
		domains: [
			"img.freepik.com",
		],
	},
};

export default config;