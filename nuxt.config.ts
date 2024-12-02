// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    app: {
        head: {
            htmlAttrs: {
                style: 'background-color: #07152F;'
            }
        }
    },
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
      '@vueuse/nuxt',
      '@nuxtjs/partytown'
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