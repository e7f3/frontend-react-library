import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'

import { AppLink, AppLinkProps, AppLinkTheme } from './AppLink'

const meta: Meta<typeof AppLink> = {
    title: 'ui/AppLink',
    component: AppLink, 
    args: {
        to: '/',
        children: 'Text',
    },
};
 
export default meta;
type Story = StoryObj<typeof AppLink>;
const Template = (args: AppLinkProps) => <AppLink {...args} />

export const PrimaryTheme: Story = {
    render: Template,
    args: {
        theme: AppLinkTheme.PRIMARY,
    }
}

export const PrimaryThemeDark: Story = {
    render: Template,
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const PrimaryThemeColorful: Story = {
    render: Template,
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}

export const SecondaryTheme: Story = {
    render: Template,
    args: {
        theme: AppLinkTheme.SECONDARY,
    }
}

export const SecondaryThemeDark: Story = {
    render: Template,
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const SecondaryThemeColorful: Story = {
    render: Template,
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}