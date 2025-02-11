import type {
    Meta,
    StoryObj 
} from '@storybook/react';

import StorybookAvatar from 'shared/assets/test/storybook-avatar.jpg';

import { Avatar } from './Avatar';

const meta = {
    title: 'ui/Avatar',
    component: Avatar,
    parameters: { layout: 'centered' },
    args: {
        size: 200,
        alt: 'Avatar',
        src: StorybookAvatar,
    },
    tags: [ 'autodocs' ],
} satisfies Meta<typeof Avatar>;
 
export default meta;
type Story = StoryObj<typeof Avatar>;

export const DefaultSize : Story = { name: 'Default size' };

export const SmallSize: Story = {
    name: 'Small size',
    args: { size: 50 },
};
