export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: false },
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
		lazy: false,
		langDir: 'locales/',
		defaultLocale: 'en',
		strategy: 'prefix_except_default',
	},
});
