import type { Meta, StoryObj } from '@storybook/react';

import StorybookAvatar from 'shared/assets/test/storybook-avatar.jpg'

import { Avatar, AvatarProps } from './Avatar'

const meta: Meta<typeof Avatar> = {
    title: 'ui/Avatar',
    component: Avatar,
    args: {
        size: 200,
        alt: 'Avatar',
        src: StorybookAvatar,
    },
};
 
export default meta;
type Story = StoryObj<typeof Avatar>;
const Template = (args: AvatarProps) => <Avatar {...args} />


export const DefaultSize : Story = {
    render: Template,
}

export const SmallSize: Story = {
    render: Template,
    args: {
        size: 50,
    }
}
