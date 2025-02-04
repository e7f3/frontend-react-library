import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'

import { Select, SelectProps } from './Select'

const meta: Meta<typeof Select> = {
    title: 'ui/Select',
    component: Select,
    args: {
        value: 'Text',
        options: [
            { value: '1', content: '1' },
            { value: '2', content: '2' },
        ],
        label: 'Label',
        onChange: (value) => {},
    },
};
 
export default meta;
type Story = StoryObj<typeof Select>;
const Template = (args: SelectProps<string>) => <Select {...args} />

export const Default: Story = {
    render: Template,
}

export const DefaultReadonly: Story = {
    render: Template,
    args: { readonly: true }
}

export const DefaultDark: Story = {
    render: Template,
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const DefaultDarkReadonly: Story = {
    render: Template,
    args: { readonly: true },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const DefaultColorful: Story = {
    render: Template,
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}
