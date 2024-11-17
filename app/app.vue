<template>
    <div ref="container" class="w-full min-h-screen text-white bg-[#07152F] flex items-center justify-center">
        <ClientOnly>
            <div class="flex flex-col items-center justify-center gap-12">
                <div class="sr-only">
                    <h1>The Home of Chakra Fox</h1>
                    <p>
                        ChakraFox is a Ghost, a Specter, an Apparition, a Silent Hunter. No Physical Presence… Formerly
                        Streaming on Twitch. Currently… no one knows.
                    </p>
                    <p>
                        He enjoys programming, hiking, playing guitar, and more recently flying airplanes.
                    </p>
                </div>
                <div class="relative">
                    <div :style="shadowStyles"
                         class="absolute aspect-[3/4] bg-black/20 blur-lg rounded-xl flex items-center w-72 justify-center">
                    </div>

                    <Transition appear
                                enter-active-class="transition duration-500 ease-in-out transform"
                                enter-from-class="opacity-0 scale-90">
                        <div :style="computedStyles"
                             class="aspect-[3/4] border border-border/5 bg-gradient-to-br rounded-xl flex items-center w-72 justify-center">
                            <NuxtImg key="logo" class="w-64" src="images/logo.png"/>
                        </div>
                    </Transition>
                </div>
                <Transition appear
                            enter-active-class="delay-500 duration-500 ease-in-out transform"
                            enter-from-class="opacity-0 translate-y-20">

                    <div key="social"
                         class="absolute transition-all bottom-12 right-1/2 translate-x-1/2 md:right-20 md:translate-x-0 p-2 flex shadow-lg bg-background rounded-xl text-muted-foreground">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipContent>@vnm_chakrafox</TooltipContent>
                                <TooltipTrigger as-child>
                                    <NuxtLink data-link to="https://x.com/vnm_chakrafox"
                                              class="text-2xl hover:bg-accent hover:text-accent-foreground rounded-lg size-12 flex items-center justify-center">
                                        <Icon name="icon:x-com"/>
                                    </NuxtLink>
                                </TooltipTrigger>
                            </Tooltip>
                            <Tooltip>
                                <TooltipContent>@chakrafox</TooltipContent>
                                <TooltipTrigger as-child>
                                    <NuxtLink to="https://instagram.com/chakrafox"
                                              class="text-2xl hover:bg-accent hover:text-accent-foreground rounded-lg size-12 flex items-center justify-center">
                                        <Icon name="lucide:instagram"/>
                                    </NuxtLink>
                                </TooltipTrigger>
                            </Tooltip>

                        </TooltipProvider>
                    </div>
                </Transition>
            </div>
        </ClientOnly>
    </div>
</template>


<script setup lang="ts">


useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
        }
    ]
})

useSeoMeta({
    title: 'ChakraFox',
    twitterTitle: 'ChakraFox - Home of the Fox',
    twitterDescription: 'ChakraFox is a Ghost, a Specter, an Apparition, a Silent Hunter. No Physical Presence… Formerly Streaming on Twitch. Currently… no one knows. He enjoys programming, hiking, playing guitar, and more recently flying airplanes.',
    ogImage: '/images/ogImage.png',
    twitterImage: '/images/ogImage.png',
    twitterCard: 'summary_large_image',
    ogTitle: 'ChakraFox',
    ogType: 'website',
    ogLocale: 'en-us',
    ogUrl: 'https://chakrafox.com',
    ogDescription: 'ChakraFox is a Ghost, a Specter, an Apparition, a Silent Hunter. No Physical Presence… Formerly Streaming on Twitch. Currently… no one knows. He enjoys programming, hiking, playing guitar, and more recently flying airplanes.',
    description: 'ChakraFox is a Ghost, a Specter, an Apparition, a Silent Hunter. No Physical Presence… Formerly Streaming on Twitch. Currently… no one knows. He enjoys programming, hiking, playing guitar, and more recently flying airplanes.'
})


const container = ref(null)

const dampening = 0.02

const {tilt, roll, source} = useParallax(container)

const {width, height} = useElementSize(container)

const computedStyles = computed(() => ({
    background: `radial-gradient(circle 512px at ${(-150 * tilt.value) + 50}% ${(150 * roll.value) + 50}%, #07152F, #07152F 50%, #202E4750 75%, #07152F 85%)`,
    backgroundPosition: `12% 50%`,
    transform: `rotateX(${roll.value * 10}deg) rotateY(${tilt.value * 10}deg) translate(${(width.value * tilt.value * dampening)}px, ${(height.value * roll.value * dampening) * -1}px)`,
}))
const shadowStyles = computed(() => ({
    transform: `rotateX(${roll.value * 10}deg) rotateY(${tilt.value * 10}deg) translate(${(width.value * tilt.value * dampening) * -1}px, ${(height.value * roll.value * dampening)}px)`,
}))
</script>