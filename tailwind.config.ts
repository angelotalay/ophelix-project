// tailwind.config.js
import {heroui} from "@heroui/react";
import {ThemeColors} from "@/app/themeTypes";
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        heroui({
            prefix: "heroui",
            addCommonColors: false,
            defaultTheme: "light",
            defaultExtendTheme: "light",
            layout: {},
            themes: {
                light: {
                    layout: {},
                    colors:<ThemeColors> {
                        "background":{
                            "100": "#F2D3FB",
                            "200": "#E1A8F7",
                            "300": "#C378E9",
                            "400": "#A154D3",
                            "500": "#7524B6",
                            "600": "#5B1A9C",
                            "700": "#441283",
                            "800": "#300B69",
                            "900": "#210657",},
                        "primary": {
                            "100": "#F2D3FB",
                            "200": "#E1A8F7",
                            "300": "#C378E9",
                            "400": "#A154D3",
                            "500": "#7524B6",
                            "600": "#5B1A9C",
                            "700": "#441283",
                            "800": "#300B69",
                            "900": "#210657",
                        },
                        "success":{
                            "100": "#E9FAD4",
                            "200": "#CFF6AB",
                            "300": "#A8E57D",
                            "400": "#80CC57",
                            "500": "#4DAA29",
                            "600": "#36921D",
                            "700": "#237A14",
                            "800": "#13620D",
                            "900": "#085107",
                        },
                        "info":{
                            "100": "#D1EBFE",
                            "200": "#A4D4FD",
                            "300": "#76B8FB",
                            "400": "#549EF7",
                            "500": "#1D75F2",
                            "600": "#155AD0",
                            "700": "#0E43AE",
                            "800": "#092E8C",
                            "900": "#052074",
                        },
                        "danger":{
                            "100": "#FBDFD2",
                            "200": "#F8B9A7",
                            "300": "#EA8778",
                            "400": "#D55953",
                            "500": "#BA232A",
                            "600": "#9F192B",
                            "700": "#85112B",
                            "800": "#6B0B29",
                            "900": "#590627",
                        },
                        "warning":{
                            "100": "#FFF2CD",
                            "200": "#FFE19B",
                            "300": "#FFCC69",
                            "400": "#FFB843",
                            "500": "#FF9605",
                            "600": "#DB7703",
                            "700": "#B75C02",
                            "800": "#934301",
                            "900": "#7A3200",
                        },
                    },

                },
                dark: {
                    layout: {},
                    colors: {},
                },
            },
        }),
    ],};