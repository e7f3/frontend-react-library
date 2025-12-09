import type {
    Meta,
    StoryObj
} from '@storybook/react';

import {
    AppLink,
    AppLinkTheme
} from './AppLink.js';
import { Theme } from '../../providers/ThemeProvider';

const meta = {
    title: 'ui/AppLink',
    component: AppLink,
    parameters: { layout: 'centered' },
    args: {
        to: '/some-path',
        children: 'Click me',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof AppLink>;

export const primary: Story = {
    name: 'Primary',
    args: { theme: AppLinkTheme.PRIMARY },
    parameters: { backgrounds: { default: Theme.LIGHT } },
};

export const secondary: Story = {
    name: 'Secondary',
    args: { theme: AppLinkTheme.SECONDARY },
    parameters: primary.parameters,
};

export const darkThemePrimary: Story = {
    name: 'Dark theme - Primary',
    args: { theme: AppLinkTheme.PRIMARY },
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK },
};

export const darkThemeSecondary: Story = {
    name: 'Dark theme - Secondary',
    args: { theme: AppLinkTheme.SECONDARY },
    parameters: darkThemePrimary.parameters,
    globals: darkThemePrimary.globals,
};
