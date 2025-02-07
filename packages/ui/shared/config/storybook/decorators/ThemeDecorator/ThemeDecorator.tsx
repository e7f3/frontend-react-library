import { classNames } from '@library/core/shared/utils/classNames/classNames'
import { useGlobals } from '@storybook/preview-api'
import { Decorator, ReactRenderer } from '@storybook/react'
import { DecoratorFunction } from 'storybook/internal/types'

import { Theme, ThemeProvider } from 'shared/providers/ThemeProvider'

import classes from './ThemeDecorator.module.scss'

export const ThemeDecorator: DecoratorFunction<ReactRenderer> = (Story, context) => {
    const [{ theme }] = useGlobals();

    console.log(theme);

    return (
        <ThemeProvider initialTheme={theme ?? Theme.LIGHT}>
            <div className={classNames('app', {}, [classes.ThemeDecorator, theme])}>
                <Story />
            </div>
        </ThemeProvider>
    )
};