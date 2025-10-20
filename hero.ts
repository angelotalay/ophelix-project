// hero.ts
import {heroui} from "@heroui/react";

export default heroui({
    prefix: "heroui",
    addCommonColors: false,
    defaultTheme: "light",
    defaultExtendTheme: "light",
    themes: {
        light: {
            layout: {},
            colors: {
                // background: {
                //     "100":"#F2D3FB","200":"#E1A8F7","300":"#C378E9","400":"#A154D3","500":"#7524B6",
                //     "600":"#5B1A9C","700":"#441283","800":"#300B69","900":"#210657"
                // },ß
                background: "#7524B6",
                foreground: "#000000",
                primary: {
                    "100": "#F2D3FB",
                    "200": "#E1A8F7",
                    "300": "#C378E9",
                    "400": "#A154D3",
                    "500": "#7524B6",
                    "600": "#5B1A9C",
                    "700": "#441283",
                    "800": "#300B69",
                    "900": "#210657",
                    "DEFAULT": "#7524B6",
                    "foreground": "#000000"
                },
                secondary: {
                    "100": '#f3e6ba',
                    "200": '#ead593',
                    "300": '#e0c46b',
                    "400": '#d7b342',
                    "500": '#bd9928',
                    "600": '#93771d',
                    "700": '#695512',
                    "800": '#403306',
                    "900": '#181100',
                    "DEFAULT": "#d7b342",
                    "foreground": "#ffffff"

                },
                success: {
                    "100": "#E9FAD4",
                    "200": "#CFF6AB",
                    "300": "#A8E57D",
                    "400": "#80CC57",
                    "500": "#4DAA29",
                    "600": "#36921D",
                    "700": "#237A14",
                    "800": "#13620D",
                    "900": "#085107",
                    "DEFAULT": "#4DAA29",
                    "foreground": "#ffffff"

                },
                danger: {
                    "100": "#FBDFD2",
                    "200": "#F8B9A7",
                    "300": "#EA8778",
                    "400": "#D55953",
                    "500": "#BA232A",
                    "600": "#9F192B",
                    "700": "#85112B",
                    "800": "#6B0B29",
                    "900": "#590627",
                    "DEFAULT": "#BA232A",
                    "foreground": "#ffffff"

                },
                warning: {
                    "100": "#FFF2CD",
                    "200": "#FFE19B",
                    "300": "#FFCC69",
                    "400": "#FFB843",
                    "500": "#FF9605",
                    "600": "#DB7703",
                    "700": "#B75C02",
                    "800": "#934301",
                    "900": "#7A3200",
                    "DEFAULT": "#FF9605",
                    "foreground": "#ffffff"

                }
            },
        },
        dark: {layout: {}, colors: {}},
    }
});


