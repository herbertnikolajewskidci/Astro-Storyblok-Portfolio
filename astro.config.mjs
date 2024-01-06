import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
    integrations: [
        storyblok({
            //accessToken: env.STORYBLOK_TOKEN,
            accessToken: "hWdryci5Qm0EPyzhCfFQRwtt",
            apiOptions: {
                region: "",
            },
            bridge: {
                customParent: "https://app.storyblok.com",
            },
            components: {
                feature: "storyblok/components/Feature",
                nav: "storyblok/components/Nav",
                picslider: "storyblok/components/PicSlider",
                scroller: "storyblok/components/Scroller",
                slide: "storyblok/components/Slide",
                teaser: "storyblok/components/Teaser",
                footer: "storyblok/mainComponents/Footer",
                grid: "storyblok/mainComponents/Grid",
                header: "storyblok/mainComponents/Header",
                page: "storyblok/Page",
            },
        }),
        tailwind(),
    ],
    vite: {
        plugins: [basicSsl()],
        server: {
            https: true,
        },
    },
});
