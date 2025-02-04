import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'

import { Skeleton, SkeletonProps } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
    title: 'ui/Skeleton',
    component: Skeleton,
    argTypes: {},
};
 
export default meta;
type Story = StoryObj<typeof Skeleton>;
const Template = (args: SkeletonProps) => <Skeleton {...args} />

export const Default: Story = {
    render: Template
}

export const DefaultDark: Story = {
    render: Template,
    decorators: [ThemeDecorator(Theme.DARK)]
}

const DefaultColorful: Story = {
    render: Template,
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}