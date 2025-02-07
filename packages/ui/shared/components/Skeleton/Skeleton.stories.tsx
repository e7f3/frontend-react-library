import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/providers/ThemeProvider'

import { Skeleton } from './Skeleton'

const meta = {
    title: 'ui/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;
 
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const defaultSkeleton: Story = {
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
