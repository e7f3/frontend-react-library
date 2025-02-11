import type {
    Meta,
    StoryObj 
} from '@storybook/react';

import { Theme } from 'shared/providers/ThemeProvider';

import {
    ColoredWith,
    Icon 
} from './Icon';
import CalendarIcon from '../../assets/icons/calendar.svg';

const meta = {
    title: 'ui/Icon',
    component: Icon,
    parameters: { layout: 'centered' },
    args: {
        icon: CalendarIcon,
        coloredWith: ColoredWith.STROKE,
    },
    tags: [ 'autodocs' ],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;
 
export const defaultIcon: Story = {
    name: 'Default',
    parameters: { backgrounds: { default: Theme.LIGHT } },
};
