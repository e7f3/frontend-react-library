
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'

import { Input, InputProps } from './Input'

const meta: Meta<typeof Input> = {
    title: 'ui/Input',
    component: Input,
    args: {
        value: 'Text',
        placeholder: 'Placeholder',
    },
};
 
export default meta;
type Story = StoryObj<typeof Input>;
const Template = (args: InputProps) => <Input {...args} />

export const Default: Story = {
    render: Template,
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const DefaultDark: Story = {
    render: Template,
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const DefaultColorful: Story = {
    render: Template,
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}
