
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'

import { Loader, LoaderProps } from './Loader'

const meta = {
    title: 'ui/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Loader>;
 
export default meta;
type Story = StoryObj<typeof Loader>;

export const defaultLoader: Story = {
    name: 'Default',
    parameters: {
        backgrounds: {
            default: Theme.LIGHT
        }
    }
}

export const darkThemeDefault: Story = {
    name: 'Dark theme - Default',
    parameters: {
        backgrounds: {
            default: Theme.DARK
        }
    },
    globals: {
        theme: Theme.DARK
    }
}
