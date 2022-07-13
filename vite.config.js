import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/uiux/components'),
			'@widgets': path.resolve(__dirname, './src/uiux/widgets'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@api': path.resolve(__dirname, './src/api'),
		},
	},
	plugins: [
		solidPlugin(),
		chunkSplitPlugin({
			customSplitting: {
				pages: [/src\/pages/],
				components: [/src\/components/],
				utils: [/src\/utils/],
				api: [/src\/api/],
				solid: [/solid-js/],
				'hope-ui': [/@hope-ui\/solid/],
			},
		}),
	],
	build: {
		target: 'esnext',
		polyfillDynamicImport: false,
	},
});
