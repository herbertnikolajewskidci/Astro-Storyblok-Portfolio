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
                page: "storyblok/Page",
                feature: "storyblok/Feature",
                grid: "storyblok/Grid",
                teaser: "storyblok/Teaser",
                picslider: "storyblok/PicSlider",
                slide: "storyblok/Slide",
                scroller: "storyblok/Scroller",
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
