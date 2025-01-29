import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'

import { Textarea, TextareaProps } from './Textarea'

const meta: Meta<typeof Textarea> = {
    title: 'ui/Textarea',
    component: Textarea,
    argTypes: {},
};
 
export default meta;
type Story = StoryObj<typeof Textarea>;
const Template = (args: TextareaProps) => <Textarea {...args} />

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
