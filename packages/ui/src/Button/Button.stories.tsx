import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Button, ButtonSize, ButtonTheme, ButtonVariant } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: 'Text',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Clean = Template.bind({})
Clean.args = {
  theme: ButtonTheme.CLEAN,
}

export const CleanDisabled = Template.bind({})
CleanDisabled.args = {
  theme: ButtonTheme.CLEAN,
  disabled: true,
}

export const Default = Template.bind({})
Default.args = {
  theme: ButtonTheme.DEFAULT,
  variant: ButtonVariant.DEFAULT,
}

export const DefaultDisabled = Template.bind({})
DefaultDisabled.args = {
  theme: ButtonTheme.DEFAULT,
  disabled: true,
}

export const Inverted = Template.bind({})
Inverted.args = {
  theme: ButtonTheme.INVERTED,
}

export const InvertedDisabled = Template.bind({})
InvertedDisabled.args = {
  theme: ButtonTheme.INVERTED,
  disabled: true,
}

export const CleanDark = Template.bind({})
CleanDark.args = {
  theme: ButtonTheme.CLEAN,
}
CleanDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CleanDarkDisabled = Template.bind({})
CleanDarkDisabled.args = {
  theme: ButtonTheme.CLEAN,
  disabled: true,
}
CleanDarkDisabled.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultDark = Template.bind({})
DefaultDark.args = {
  theme: ButtonTheme.DEFAULT,
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultDarkDisabled = Template.bind({})
DefaultDarkDisabled.args = {
  theme: ButtonTheme.DEFAULT,
  disabled: true,
}
DefaultDarkDisabled.decorators = [ThemeDecorator(Theme.DARK)]

export const InvertedDark = Template.bind({})
InvertedDark.args = {
  theme: ButtonTheme.INVERTED,
}
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const InvertedDarkDisabled = Template.bind({})
InvertedDarkDisabled.args = {
  theme: ButtonTheme.INVERTED,
  disabled: true,
}
InvertedDarkDisabled.decorators = [ThemeDecorator(Theme.DARK)]

export const CleanColorful = Template.bind({})
CleanColorful.args = {
  theme: ButtonTheme.CLEAN,
}
CleanColorful.decorators = [ThemeDecorator(Theme.COLORFUL)]

export const CleanColorfulDisabled = Template.bind({})
CleanColorfulDisabled.args = {
  theme: ButtonTheme.CLEAN,
  disabled: true,
}
CleanColorfulDisabled.decorators = [ThemeDecorator(Theme.COLORFUL)]

export const DefaultColorful = Template.bind({})
DefaultColorful.args = {
  theme: ButtonTheme.DEFAULT,
}
DefaultColorful.decorators = [ThemeDecorator(Theme.COLORFUL)]

export const DefaultColorfulDisabled = Template.bind({})
DefaultColorfulDisabled.args = {
  theme: ButtonTheme.DEFAULT,
  disabled: true,
}
DefaultColorfulDisabled.decorators = [ThemeDecorator(Theme.COLORFUL)]

export const InvertedColorful = Template.bind({})
InvertedColorful.args = {
  theme: ButtonTheme.INVERTED,
}
InvertedColorful.decorators = [ThemeDecorator(Theme.COLORFUL)]

export const InvertedColorfulDisabled = Template.bind({})
InvertedColorfulDisabled.args = {
  theme: ButtonTheme.INVERTED,
  disabled: true,
}
InvertedColorfulDisabled.decorators = [ThemeDecorator(Theme.COLORFUL)]

export const MediumSize = Template.bind({})
MediumSize.args = {
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.M,
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.L,
}

export const XLargeSize = Template.bind({})
XLargeSize.args = {
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.XL,
}

export const SquareVariant = Template.bind({})
SquareVariant.args = {
  theme: ButtonTheme.DEFAULT,
  variant: ButtonVariant.SQUARE,
  children: '>',
}
