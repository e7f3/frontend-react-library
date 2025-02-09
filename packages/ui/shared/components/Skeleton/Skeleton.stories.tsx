import type {
    Meta, StoryObj 
} from '@storybook/react';

import { Theme } from 'shared/providers/ThemeProvider'

import { Skeleton } from './Skeleton'

const meta = {
    title: 'ui/Skeleton',
    component: Skeleton,
    parameters: { layout: 'centered', },
    args: {
        config: [
            {
                width: '400px', height: '100px' 
            },
            {
                width: '400px', height: '100px' 
            }
        ] 
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;
 
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const defaultSkeleton: Story = {
    name: 'Default',
    parameters: { backgrounds: { default: Theme.LIGHT } }
}

export const roundedSkeleton: Story = {
    name: 'Rounded',
    args: {
        config: [
            {
                width: '100px',
                height: '100px',
                shape: 'circle'
            },
        ]
    },
    parameters: { backgrounds: { default: Theme.LIGHT } }
}

export const darkThemeDefault: Story = {
    name: 'Dark theme - Default',
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK }
}

export const darkThemeRounded: Story = {
    name: 'Dark theme - Rounded',
    args: {
        config: [
            {
                width: '100px',
                height: '100px',
                shape: 'circle'
            },
        ]
    },
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK }
}
