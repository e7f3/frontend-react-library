import type { Meta, StoryObj } from '@storybook/react';

import CalendarIcon from 'shared/assets/icons/calendar.svg'

import { ColoredWith, Icon, IconProps } from './Icon'

const meta: Meta<typeof Icon> = {
    title: 'ui/Icon',
    component: Icon,
    argTypes: {},
    args: {
        icon: CalendarIcon,
        coloredWith: ColoredWith.STROKE,
    },
};
 
export default meta;
type Story = StoryObj<typeof Icon>;
const Template = (args: IconProps) => <Icon {...args} />

export const Default: Story = {
    render: Template,
}
