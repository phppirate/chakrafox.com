// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    future: {
        compatibilityVersion: 4
    },
    devtools: {enabled: true},
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/image',
      '@nuxt/icon',
      'shadcn-nuxt',
      '@nuxtjs/color-mode',
      '@vueuse/nuxt'
    ],
    shadcn: {
        prefix: '',
        componentDir: './app/components/ui'
    },
    icon: {
        customCollections: [
            {
                prefix: 'icon',
                dir: './app/assets/icons'
            }
        ]
    }
})