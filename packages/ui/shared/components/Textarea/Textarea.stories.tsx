import type {
    Meta,
    StoryObj 
} from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/providers/ThemeProvider';

import {
    Textarea,
    TextareaProps 
} from './Textarea';

const meta = {
    title: 'ui/Textarea',
    component: Textarea,
    parameters: { layout: 'centered' },
    tags: [ 'autodocs' ],
} satisfies Meta<typeof Textarea>;
 
export default meta;
type Story = StoryObj<typeof Textarea>;

export const textarea: Story = {
    name: 'Default',
    parameters: { backgrounds: { default: Theme.LIGHT } },
};

export const darkThemeTextarea: Story = {
    name: 'Dark theme - Default',
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK },
};
