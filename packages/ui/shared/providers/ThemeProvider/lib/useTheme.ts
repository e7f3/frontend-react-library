import { useContext, useEffect } from 'react'

import { LOCALSTORAGE_THEME_KEY } from '@library/ui/shared/const/localstorage'

import { DEFAULT_THEME, Theme, ThemeContext } from './ThemesContext'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        const appTheme =
      localStorage.getItem(LOCALSTORAGE_THEME_KEY) ?? DEFAULT_THEME
        document.body.className = appTheme
    }, [])

    const toggleTheme = () => {
        let newTheme: Theme

        switch (theme) {
        case Theme.LIGHT:
            newTheme = Theme.DARK
            break
        case Theme.DARK:
            newTheme = Theme.COLORFUL
            break
        case Theme.COLORFUL:
            newTheme = Theme.LIGHT
            break
        default:
            newTheme = Theme.LIGHT
        }
        localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme)
        setTheme?.(newTheme)
        document.body.className = newTheme
    }
    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    }
}
