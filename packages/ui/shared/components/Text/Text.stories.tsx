import type {
    Meta, StoryObj 
} from '@storybook/react';

import { Theme } from 'shared/providers/ThemeProvider'

import {
    Text, TextMode, TextVariant 
} from './Text'

const meta = {
    title: 'ui/Text',
    component: Text,
    args: { content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.' },
    parameters: { layout: 'centered', },
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;
 
export default meta;
type Story = StoryObj<typeof Text>;

export const paragraph: Story = {
    name: 'Paragraph',
    parameters: { backgrounds: { default: Theme.LIGHT } }
}

export const subtitle: Story = {
    name: 'Subtitle',
    args: { variant: TextVariant.SUBTITLE, },
    parameters: paragraph.parameters
}

export const title: Story = {
    name: 'Title',
    args: { variant: TextVariant.TITLE, },
    parameters: paragraph.parameters
}

export const paragraphError: Story = {
    name: 'Paragraph Error',
    args: { mode: TextMode.ERROR, },
    parameters: paragraph.parameters,
}

export const subtitleError: Story = {
    name: 'Subtitle Error',
    args: {
        mode: TextMode.ERROR,
        variant: TextVariant.SUBTITLE,
    },
    parameters: paragraph.parameters
}

export const titleError: Story = {
    name: 'Title Error',
    args: {
        mode: TextMode.ERROR,
        variant: TextVariant.TITLE,
    },
    parameters: paragraph.parameters
}

export const darkThemeParagraph: Story = {
    name: 'Dark theme - Paragraph',
    parameters: { backgrounds: { default: Theme.DARK, } },
    globals: { theme: Theme.DARK, }
}

export const darkThemeSubtitle: Story = {
    name: 'Dark theme - Subtitle',
    args: { variant: TextVariant.SUBTITLE, },
    parameters: darkThemeParagraph.parameters,
    globals: darkThemeParagraph.globals
}


export const darkThemeTitle: Story = {
    name: 'Dark theme - Title',
    args: { variant: TextVariant.TITLE, },
    parameters: darkThemeParagraph.parameters,
    globals: darkThemeParagraph.globals
}

export const darkThemeParagraphError: Story = {
    name: 'Dark theme - Paragraph Error',
    args: { mode: TextMode.ERROR, },
    parameters: darkThemeParagraph.parameters,
    globals: darkThemeParagraph.globals,
}

export const darkThemeSubtitleError: Story = {
    name: 'Dark theme - Subtitle Error',
    args: {
        mode: TextMode.ERROR,
        variant: TextVariant.SUBTITLE,
    },
    parameters: darkThemeParagraph.parameters,
    globals: darkThemeParagraph.globals
}

export const darkThemeTitleError: Story = {
    name: 'Dark theme - Title Error',
    args: {
        mode: TextMode.ERROR,
        variant: TextVariant.TITLE,
    },
    parameters: darkThemeParagraph.parameters,
    globals: darkThemeParagraph.globals
}
