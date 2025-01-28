import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ColoredWith, Icon } from './Icon'

export default {
  title: 'shared/Icon',
  component: Icon,
  argTypes: {},
  args: {
    icon: CalendarIcon,
    coloredWith: ColoredWith.STROKE,
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})

Default.decorators = [FlexDecorator(FlexDecoratorVariant.CENTERED)]
