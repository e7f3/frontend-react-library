import type {
    Meta,
    StoryObj
} from '@storybook/react';

import {
    Card,
    CardTheme
} from './Card.js';
import { Theme } from '../../providers/ThemeProvider.js';
import { Text } from '../Text/Text.js';

const meta = {
    title: 'ui/Card',
    component: Card,
    parameters: { layout: 'centered' },
    args: {
        children:
            <Text content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo odit laboriosam!" />,
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const defaultCard: Story = {
    name: 'Default',
    args: { theme: CardTheme.DEFAULT },
    parameters: { backgrounds: { default: Theme.LIGHT } },
};

export const warningCard: Story = {
    name: 'Warning',
    args: { theme: CardTheme.WARNING },
    parameters: defaultCard.parameters,
};

export const actionCard: Story = {
    name: 'Action',
    args: { theme: CardTheme.ACTION },
    parameters: defaultCard.parameters,
};

export const darkThemeDefaultCard: Story = {
    name: 'Dark theme - Default',
    args: { theme: CardTheme.DEFAULT },
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK },
};

export const darkThemeWarningCard: Story = {
    name: 'Dark theme - Warning',
    args: { theme: CardTheme.WARNING },
    parameters: darkThemeDefaultCard.parameters,
    globals: darkThemeDefaultCard.globals,
};

export const darkThemeActionCard: Story = {
    name: 'Dark theme - Action',
    args: { theme: CardTheme.ACTION },
    parameters: darkThemeDefaultCard.parameters,
    globals: darkThemeDefaultCard.globals,
};
