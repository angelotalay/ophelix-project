type ColorScale = {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    foreground?: string; // contrast color
    DEFAULT: ColorScale["500"];
};

export type BaseColors = {
    background: ColorScale; // the page background color
    foreground: ColorScale; // the page text color
    divider: ColorScale; // used for divider and single line border
    overlay: ColorScale; // used for modal, popover, etc.
    focus: ColorScale; // used for focus state outline
    content1: ColorScale; // used for card, modal, popover, etc.
    content2: ColorScale;
    content3: ColorScale;
    content4: ColorScale;
};

// brand colors
export type ThemeColors = BaseColors & {
    default: ColorScale;
    primary: ColorScale;
    secondary: ColorScale;
    success: ColorScale;
    info: ColorScale;
    warning: ColorScale;
    danger: ColorScale;
};

type BaseThemeUnit = {
    small?: string;
    medium?: string;
    large?: string;
};

type FontThemeUnit = {
    small?: string;
    medium?: string;
    large?: string;
    tiny?: string;
};

export interface LayoutTheme {
    /**
     * The default font size applied across the components.
     */
    fontSize?: FontThemeUnit;
    /**
     * The default line height applied across the components.
     */
    lineHeight?: FontThemeUnit;
    /**
     * The default radius applied across the components.
     * we recommend to use `rem` units.
     */
    radius?: BaseThemeUnit;
    /**
     * A number between 0 and 1 that is applied as opacity-[value] when
     * the component is disabled.
     */
    disabledOpacity?: string | number;
    /**
     * The default height applied to the divider component.
     * we recommend to use `px` units.
     */
    dividerWeight?: string;
    /**
     * The border width applied across the components.
     */
    borderWidth?: BaseThemeUnit;
    /**
     * The box shadow applied across the components.
     */
    boxShadow?: BaseThemeUnit;
};

export type ConfigTheme = {
    extend?: "light" | "dark"; // base theme to extend
    layout?: LayoutTheme; // see LayoutTheme
    colors?: ThemeColors; // see ThemeColors
};

export type ConfigThemes = Record<string, ConfigTheme>;

