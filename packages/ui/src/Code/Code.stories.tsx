import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import {
  FlexDecorator,
  FlexDecoratorVariant,
} from 'shared/config/storybook/FlexDecorator/FlexDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Code } from './Code'

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {},
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Default = Template.bind({})
Default.args = {
  children: `
  for (let i = 0; i < 10; i++) {
    console.log(i)
  }`,
}
Default.decorators = [FlexDecorator(FlexDecoratorVariant.CENTERED)]

export const Dark = Template.bind({})
Dark.args = {
  children: `
  for (let i = 0; i < 10; i++) {
    console.log(i)
  }`,
}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  FlexDecorator(FlexDecoratorVariant.CENTERED),
]

export const Colorful = Template.bind({})
Colorful.args = {
  children: `
  for (let i = 0; i < 10; i++) {
    console.log(i)
  }`,
}
Colorful.decorators = [
  ThemeDecorator(Theme.COLORFUL),
  FlexDecorator(FlexDecoratorVariant.CENTERED),
]
