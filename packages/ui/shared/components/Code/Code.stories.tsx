import type {
    Meta, StoryObj 
} from '@storybook/react';

import { Theme } from 'shared/providers/ThemeProvider';

import { Code } from './Code'

const meta = {
    title: 'ui/Code',
    component: Code,
    parameters: { layout: 'centered', },
    args: {
        children: `
        for (let i = 0; i < 10; i++) {
            console.log(i)
        }`,
    },
    tags: [ 'autodocs' ],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof Code>;

export const defaultCode: Story = {
    name: 'Default',
    parameters: { backgrounds: { default: Theme.LIGHT } }
}

export const darkThemeCode: Story = {
    name: 'Dark theme',
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK }
}