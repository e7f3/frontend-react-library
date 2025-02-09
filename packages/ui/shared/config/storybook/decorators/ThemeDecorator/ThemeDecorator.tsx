import { classNames } from '@library/core/shared/utils/classNames/classNames'
import { useGlobals } from '@storybook/preview-api'
import {
    Decorator, ReactRenderer 
} from '@storybook/react'
import { DecoratorFunction } from 'storybook/internal/types'

import {
    Theme, ThemeProvider 
} from 'shared/providers/ThemeProvider'

import classes from './ThemeDecorator.module.scss'

/**
 * Storybook Decorator for setting theme
 * @param Story - story
 * @param context - context
 */
export const ThemeDecorator: DecoratorFunction<ReactRenderer> = (Story, context) => {
    const [{ theme }] = useGlobals();

    return (
        <ThemeProvider initialTheme={theme ?? Theme.LIGHT}>
            <div className={classNames('app', {}, [classes.ThemeDecorator, theme])}>
                <Story />
            </div>
        </ThemeProvider>
    )
};