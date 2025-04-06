/* eslint-disable @typescript-eslint/no-explicit-any */
interface Theme {
    backgroundColor: string;
    foregroundColor: string;
}

export interface ThemeData {
    currentTheme: Theme;
    previousTheme: Theme;
    draftTheme: Theme;
}

const isTheme = (obj: any): obj is Theme => {
    return (
        typeof obj === 'object' &&
        typeof obj.backgroundColor === 'string' &&
        typeof obj.foregroundColor === 'string'
    );
};

export const isThemeData = (data: any): data is ThemeData => {
    return (
        typeof data === 'object' &&
        isTheme(data.currentTheme) &&
        isTheme(data.previousTheme) &&
        isTheme(data.draftTheme)
    );
};

export const updateDomWithColors = (
    colorType: 'background' | 'foreground',
    area: 'main' | 'preview',
    colorName: string
) => {
    document.documentElement.style.setProperty(
        `--${colorType}-color-${area}`,
        colorName
    );
};
