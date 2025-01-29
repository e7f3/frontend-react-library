
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'

import { Loader, LoaderProps } from './Loader'

const meta: Meta<typeof Loader> = {
    title: 'ui/Loader',
    component: Loader,
};
 
export default meta;
type Story = StoryObj<typeof Loader>;
const Template = (args: LoaderProps) => <Loader {...args} />

export const Default: Story = {
    render: Template,
}

export const Dark: Story = {
    render: Template,
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Colorful: Story = {
    render: Template,
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}
