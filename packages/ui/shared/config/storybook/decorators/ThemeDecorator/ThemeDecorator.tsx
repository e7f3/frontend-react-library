import { classNames } from '@library/core/shared/utils/classNames/classNames'
import { Decorator } from '@storybook/react'

import { Theme, ThemeProvider } from 'shared/providers/ThemeProvider'

import classes from './ThemeDecorator.module.scss'

export const ThemeDecorator = (theme: Theme): Decorator => (StoryComponent) => (
    <ThemeProvider initialTheme={theme}>
        <div className={classNames('app', {}, [classes.ThemeDecorator, theme])}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);