import { ComponentStory, ComponentMeta } from '@storybook/react'

import StorybookAvatar from 'shared/assets/test/storybook-avatar.jpg'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'

import { Avatar } from './Avatar'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    size: 200,
    alt: 'Avatar',
    src: StorybookAvatar,
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.decorators = [FlexDecorator(FlexDecoratorVariant.CENTERED)]

export const SmallSize = Template.bind({})
SmallSize.args = {
  size: 50,
}
SmallSize.decorators = [FlexDecorator(FlexDecoratorVariant.CENTERED)]
