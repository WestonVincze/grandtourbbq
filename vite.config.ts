import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			$components: path.resolve('./src/components'),
			$data: path.resolve('./src/data'),
			$sections: path.resolve('./src/sections'),
			$icons: path.resolve('./src/icons'),
		}
	}
});
