import {
    FC,
    useMemo,
    useState,
    PropsWithChildren 
} from 'react';

import { LOCALSTORAGE_THEME_KEY } from 'shared/const/localstorage';

import {
    Theme,
    ThemeContext 
} from '../lib/ThemesContext';

import 'shared/styles/index.scss';

interface ThemeProviderProps extends PropsWithChildren {
    /**
     * Initial theme
     */
    initialTheme?: Theme
}

const defaultTheme =
  (localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

/**
 * Theme provider component
 */
export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children, initialTheme, 
    } = props;
    const [ theme, setTheme ] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [ theme ]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
