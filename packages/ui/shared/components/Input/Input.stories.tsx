
import type {
    Meta, StoryObj 
} from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'

import {
    Input, InputProps 
} from './Input'

const meta = {
    title: 'ui/Input',
    component: Input,
    parameters: { layout: 'centered', },
    args: {
        value: 'Text',
        placeholder: 'Placeholder',
    },
    tags: [ 'autodocs' ],
} satisfies Meta<typeof Input>;
 
export default meta;
type Story = StoryObj<typeof Input>;

export const defaultInput: Story = {
    name: 'Default',
    parameters: { backgrounds: { default: Theme.LIGHT } }
}

export const readonlyInput: Story = {
    name: 'Readonly',
    args: { readonly: true },
    parameters: defaultInput.parameters,
}

export const darkThemeDefault: Story = {
    name: 'Dark theme - Default',
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK }
}

export const darkThemeReadonly: Story = {
    name: 'Dark theme - Readonly',
    args: { readonly: true, },
    parameters: darkThemeDefault.parameters,
    globals: darkThemeDefault.globals,
}