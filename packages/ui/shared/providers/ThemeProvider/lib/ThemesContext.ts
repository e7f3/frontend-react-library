import { createContext } from 'react';

export enum Theme {
    LIGHT = 'ui_theme_light',
    DARK = 'ui_theme_dark'
}

export interface ThemeContextProps {
    /**
     * Current theme
     */
    theme?: Theme
    /**
     * Change theme callback
     * @param theme - new theme
     */
    setTheme?: (theme: Theme) => void
}

/**
 * Theme context for ThemeProvider
 */
export const ThemeContext = createContext<ThemeContextProps>({});

/**
 * Default theme
 */
export const DEFAULT_THEME = Theme.LIGHT;
