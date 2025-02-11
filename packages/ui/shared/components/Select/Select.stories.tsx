import type {
    Meta, StoryObj 
} from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'

import {
    Select, SelectProps 
} from './Select'

const meta = {
    title: 'ui/Select',
    component: Select,
    parameters: { layout: 'centered', },
    args: {
        value: 'Text',
        options: [
            {
                value: '1',
                content: '1' 
            },
            {
                value: '2',
                content: '2' 
            },
        ],
        label: 'Label',
        onChange: (value) => {},
    },
    tags: [ 'autodocs' ],
} satisfies Meta<typeof Select>;
 
export default meta;
type Story = StoryObj<typeof Select>;

export const defaultSelect: Story = {
    name: 'Default',
    parameters: { backgrounds: { default: Theme.LIGHT } }
}

export const readonlySelect: Story = {
    name: 'Readonly',
    args: { readonly: true },
    parameters: defaultSelect.parameters
}

export const darkThemeDefault: Story = {
    name: 'Dark theme - Default',
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK }
}

export const darkThemeReadonly: Story = {
    name: 'Dark theme - Readonly',
    args: { readonly: true },
    parameters: darkThemeDefault.parameters,
    globals: darkThemeDefault.globals
    
}
