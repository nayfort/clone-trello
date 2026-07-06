declare const process: {
	env: {
		NODE_ENV?: string;
	};
};

const devAppManifestPath = new URL(
	'./.nuxt/manifest/meta/dev.json',
	import.meta.url
).pathname;
const devManifestShimPath = new URL(
	'./lib/nuxtManifestDevShim.ts',
	import.meta.url
).pathname;
const isDev = process.env.NODE_ENV !== 'production';

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: false },
	experimental: {
		appManifest: true,
	},
	alias: isDev
		? {
				'#app/composables/manifest': devManifestShimPath,
			}
		: {},
	vite: {
		resolve: {
			alias: isDev
				? {
						'#app/composables/manifest': devManifestShimPath,
						'#app-manifest': devAppManifestPath,
					}
				: {},
		},
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/color-mode',
		'@vueuse/nuxt',
		'@pinia/nuxt',
		'pinia-plugin-persistedstate/nuxt',
		'@nuxtjs/i18n',
	],
	colorMode: {
		classSuffix: '',
	},
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
	i18n: {
		locales: [
			{ code: 'en', iso: 'en-US', file: 'en.json' },
			{ code: 'uk', iso: 'uk-UA', file: 'uk.json' },
		],
		langDir: 'locales/',
		defaultLocale: 'en',
		strategy: 'prefix_except_default',
	},
});
