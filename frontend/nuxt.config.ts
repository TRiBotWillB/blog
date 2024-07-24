// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['~/assets/scss/main.scss'],
    modules: [
        '@nuxtjs/strapi',
        '@nuxtjs/tailwindcss',
        ['@nuxtjs/google-fonts', {
            families: {
                'Abril+Fatface': true,
                'Fira+Code': true,
                'Lato': true,
                'Josefin+Sans': true,
                'Playfair+Display': [100, 200, 300, 400, 500, 600, 700],
                'Bodoni+Moda':  [100, 200, 300, 400, 500, 600, 700],
                'Raleway':  [100, 200, 300, 400, 500, 600, 700],
            }
        }],
        'nuxt-strapi-blocks-renderer',
        '@vesp/nuxt-fontawesome',
        '@pinia/nuxt',
    ],
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
    },
    app: {
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    ssr: true
})

// f1dc23db6ede6515ac9760e7e8a1910fb4c1cd4621eabaa5b58f8232c3473557cc3e2cded5f7a8a677184b66c2bd81743ce0af62f35cf338e40f67691e7a2614f9161dc1e9fc765fac3e87f0d257dd847bd0df52d3bf254b10c0837cfda318c8aa63659c4c4a5350bf3522d4a0e5bd46a73e7d57c5ce7d35fc8bd84d37f66bde