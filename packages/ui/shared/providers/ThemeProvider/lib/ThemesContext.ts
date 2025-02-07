import { createContext } from 'react'

export enum Theme {
  LIGHT = 'ui_theme_light',
  DARK = 'ui_theme_dark',
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const DEFAULT_THEME = Theme.LIGHT
