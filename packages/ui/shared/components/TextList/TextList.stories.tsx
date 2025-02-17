import type {
    Meta,
    StoryObj 
} from '@storybook/react';

import { Theme } from 'shared/providers/ThemeProvider';

import {
    TextList,
} from './TextList';
import { TextVariant } from '../Text/Text';

const meta = {
    title: 'ui/TextList',
    component: TextList,
    args: { items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'React Native', 'Redux', 'Redux Toolkit', 'Redux Saga', 'Redux Thunk', 'RTK Query', 'Next.js', 'Storybook', 'React Testing Library', 'Webpack', 'Vite', 'Git', 'Eslint', 'Jest' ] },
    parameters: { layout: 'centered' },
    tags: [ 'autodocs' ],
} satisfies Meta<typeof TextList>;
 
export default meta;
type Story = StoryObj<typeof TextList>;

export const defaultTextList: Story = {
    name: 'Default',
    parameters: { backgrounds: { default: Theme.LIGHT } },
};

export const subtitleTextList: Story = {
    name: 'Subtitle variant',
    args: { variant: TextVariant.SUBTITLE },
    parameters: defaultTextList.parameters,
};

export const titleTextList: Story = {
    name: 'Title variant',
    args: { variant: TextVariant.TITLE },
    parameters: defaultTextList.parameters,
};

export const darkThemeTextList: Story = {
    name: 'Dark theme - Default',
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK },
};

export const darkThemeSubtitleTextList: Story = {
    name: 'Dark theme - Subtitle variant',
    args: { variant: TextVariant.SUBTITLE },
    parameters: darkThemeTextList.parameters,
    globals: darkThemeTextList.globals
};

export const darkThemeTitleTextList: Story = {
    name: 'Dark theme - Title variant',
    args: { variant: TextVariant.TITLE },
    parameters: darkThemeTextList.parameters,
    globals: darkThemeTextList.globals
};