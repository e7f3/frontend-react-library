import type {
    Meta, StoryObj 
} from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'

import {
    Button, ButtonProps, ButtonSize, ButtonTheme, ButtonVariant 
} from './Button'

const meta = {
    title: 'ui/Button',
    component: Button,
    parameters: { layout: 'centered', },
    args: { children: 'Text', },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;
 
export default meta;
type Story = StoryObj<typeof Button>;

export const clean: Story = {
    name: 'Clean',
    args: { theme: ButtonTheme.CLEAN, },
    parameters: { backgrounds: { default: Theme.LIGHT } }
}

export const cleanDisabled: Story = {
    name: 'Clean Disabled',
    args: {
        theme: ButtonTheme.CLEAN,
        disabled: true,
    },
    parameters: clean.parameters,
}

export const defaultButton: Story = {
    name: 'Default',
    args: { theme: ButtonTheme.DEFAULT, },
    parameters: clean.parameters,
}

export const defaultDisabled: Story = {
    name: 'Default Disabled',
    args: {
        theme: ButtonTheme.DEFAULT,
        disabled: true,
    },
    parameters: clean.parameters,
}

export const inverted: Story = {
    name: 'Inverted',
    args: { theme: ButtonTheme.INVERTED, },
    parameters: clean.parameters,
}

export const invertedDisabled: Story = {
    name: 'Inverted Disabled',
    args: {
        theme: ButtonTheme.INVERTED,
        disabled: true,
    },
    parameters: clean.parameters,
}

export const darkThemeClean: Story = {
    name: 'Dark theme - Clean',
    args: { theme: ButtonTheme.CLEAN, },
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK }
}

export const darkThemeCleanDisabled: Story = {
    name: 'Dark theme - Clean, Disabled',
    args: {
        theme: ButtonTheme.CLEAN,
        disabled: true,
    },
    parameters: darkThemeClean.parameters,
    globals: darkThemeClean.globals
}

export const darkThemeDefault: Story = {
    name: 'Dark theme - Default',
    args: { theme: ButtonTheme.DEFAULT, },
    parameters: darkThemeClean.parameters,
    globals: darkThemeClean.globals
}

export const darkThemeDefaultDisabled: Story = {
    name: 'Dark theme - Default, Disabled',
    args: {
        theme: ButtonTheme.DEFAULT,
        disabled: true,
    },
    parameters: darkThemeClean.parameters,
    globals: darkThemeClean.globals
}

export const darkThemeInverted: Story = {
    name: 'Dark theme - Inverted',
    args: { theme: ButtonTheme.INVERTED, },
    parameters: darkThemeClean.parameters,
    globals: darkThemeClean.globals
}

export const darkThemeInvertedDisabled: Story = {
    name: 'Dark theme - Inverted, Disabled',
    args: {
        theme: ButtonTheme.INVERTED,
        disabled: true,
    },
    parameters: darkThemeClean.parameters,
    globals: darkThemeClean.globals
}
