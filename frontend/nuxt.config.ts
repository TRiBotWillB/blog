// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['~/assets/scss/main.scss'],
    modules: [
        '@nuxtjs/tailwindcss',
        ['@nuxtjs/google-fonts', {
            families: {
                'Abril+Fatface': true,
                'Fira+Code': true
            }
        }]
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
})
