import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'

import { Code, CodeProps } from './Code'

const meta: Meta<typeof Code> = {
    title: 'ui/Code',
    component: Code,
    argTypes: {},
};
 
export default meta;
type Story = StoryObj<typeof Code>;
const Template = (args: CodeProps) => <Code {...args} />

export const Default: Story = {
    render: Template,
    args: {
        children: `
    for (let i = 0; i < 10; i++) {
      console.log(i)
    }`,
    }
}

export const Dark: Story = {
    render: Template,
    args: {
        children: `
    for (let i = 0; i < 10; i++) {
      console.log(i)
    }`,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Colorful: Story = {
    render: Template,
    args: {
        children: `
    for (let i = 0; i < 10; i++) {
      console.log(i)
    }`,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}