import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: 'build',
		sourcemap: true,
	},
	resolve: {
		alias: [
			{
				find: './runtimeConfig',
				replacement: './runtimeConfig.browser',
			},
		],
	},
	plugins: [react(), svgr()],
});
