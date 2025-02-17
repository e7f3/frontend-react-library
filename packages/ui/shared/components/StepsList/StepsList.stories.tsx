import type {
    Meta,
    StoryObj 
} from '@storybook/react';

import { Theme } from 'shared/providers/ThemeProvider';

import {
    StepsList
} from './StepsList';

const meta = {
    title: 'ui/StepsList',
    component: StepsList,
    parameters: { layout: 'centered' },
    args: {
        elements: [
            {
                marker: '1',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nisi.',
            },
            {
                marker: '2',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nisi.',
            },
            {
                marker: '3',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nisi.',
            },
        ],
    },
    tags: [ 'autodocs' ],
} satisfies Meta<typeof StepsList>;
 
export default meta;
type Story = StoryObj<typeof StepsList>;

export const rowAscStepsList: Story = {
    name: 'Row, Ascending',
    args: {
        order: 'asc',
        direction: 'row',
    },
    parameters: { backgrounds: { default: Theme.LIGHT } },
};

export const rowDescStepsList: Story = {
    name: 'Row, Descending',
    args: {
        order: 'desc',
        direction: 'row',
    },
    parameters: { backgrounds: { default: Theme.LIGHT } },
};

export const rowAscLineStepsList: Story = {
    name: 'Row, Ascending, Line',
    args: {
        order: 'asc',
        direction: 'row',
        line: true,
    },
    parameters: { backgrounds: { default: Theme.LIGHT } },
};

export const columnAscStepsList: Story = {
    name: 'Column, Ascending',
    args: {
        order: 'asc',
        direction: 'column',
    },
    parameters: { backgrounds: { default: Theme.LIGHT } },
};

export const columnDescStepsList: Story = {
    name: 'Column, Descending',
    args: {
        order: 'desc',
        direction: 'column',
    },
    parameters: { backgrounds: { default: Theme.LIGHT } },
};

export const columnAscLineStepsList: Story = {
    name: 'Column, Ascending, Line',
    args: {
        order: 'asc',
        direction: 'column',
        line: true,
    },
    parameters: { backgrounds: { default: Theme.LIGHT } },
};

export const darkThemeRowAscStepsList: Story = {
    name: 'Dark theme - Row, Ascending',
    args: {
        order: 'asc',
        direction: 'row',
    },
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK },
};

export const darkThemeRowDescStepsList: Story = {
    name: 'Dark theme - Row, Descending',
    args: {
        order: 'desc',
        direction: 'row',
    },
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK },
};

export const darkThemeRowAscLineStepsList: Story = {
    name: 'Dark theme - Row, Ascending, Line',
    args: {
        order: 'asc',
        direction: 'row',
        line: true,
    },
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK },
};

export const darkThemeColumnAscStepsList: Story = {
    name: 'Dark theme - Column, Ascending',
    args: {
        order: 'asc',
        direction: 'column',
    },
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK },
};

export const darkThemeColumnDescStepsList: Story = {
    name: 'Dark theme - Column, Descending',
    args: {
        order: 'desc',
        direction: 'column',
    },
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK },
};

export const darkThemeColumnAscLineStepsList: Story = {
    name: 'Dark theme - Column, Ascending, Line',
    args: {
        order: 'asc',
        direction: 'column',
        line: true,
    },
    parameters: { backgrounds: { default: Theme.DARK } },
    globals: { theme: Theme.DARK },
};
