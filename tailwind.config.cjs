/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            animation: {
                scroll: "scroll 40s forwards linear infinite",
                "scroll-right": "scroll 40s reverse linear infinite",
                "scroll-left": "scroll 40s forwards linear infinite",
                "scroll-fast": "scroll 20s forwards linear infinite",
                "scroll-fast-left": "scroll 20s forwards linear infinite",
                "scroll-fast-right": "scroll 20s  linear infinite reverse",
                "scroll-slow": "scroll 60s forwards linear infinite",
                "scroll-slow-left": "scroll 60s forwards linear infinite",
                "scroll-slow-right": "scroll 60s linear infinite reverse",
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
            },
            width: {
                "max-content": "max-content",
            },
            colors: {
                "neutral-100": "var(--color-neutral-100)",
                "primary-100": "var(--color-primary-100)",
                "primary-400": "var(--color-primary-400)",
                "primary-800": "var(--color-primary-800)",
                "primary-900": "var(--color-primary-900)",
                text: "var(--text)",
                background: "var(--background)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)",
            },
        },
    },
    plugins: [require("@pyncz/tailwind-mask-image")],
};
