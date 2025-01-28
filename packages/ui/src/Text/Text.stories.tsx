import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Text, TextMode, TextVariant } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const DefaultParagraph = Template.bind({})
DefaultParagraph.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
}

export const DefaultTitle = Template.bind({})
DefaultTitle.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
  variant: TextVariant.TITLE,
}

export const DefaultSubtitle = Template.bind({})
DefaultSubtitle.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
  variant: TextVariant.SUBTITLE,
}

export const DefaultParagraphDark = Template.bind({})
DefaultParagraphDark.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
}
DefaultParagraphDark.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultTitleDark = Template.bind({})
DefaultTitleDark.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
  variant: TextVariant.TITLE,
}
DefaultTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultSubtitleDark = Template.bind({})
DefaultSubtitleDark.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
  variant: TextVariant.SUBTITLE,
}
DefaultSubtitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultParagraphColorful = Template.bind({})
DefaultParagraphColorful.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
}
DefaultParagraphColorful.decorators = [ThemeDecorator(Theme.COLORFUL)]

export const DefaultTitleColorful = Template.bind({})
DefaultTitleColorful.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
  variant: TextVariant.TITLE,
}
DefaultTitleColorful.decorators = [ThemeDecorator(Theme.COLORFUL)]

export const DefaultSubtitleColorful = Template.bind({})
DefaultSubtitleColorful.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
  variant: TextVariant.SUBTITLE,
}
DefaultSubtitleColorful.decorators = [ThemeDecorator(Theme.COLORFUL)]

export const ErrorParagraph = Template.bind({})
ErrorParagraph.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.',
  mode: TextMode.ERROR,
}

export const ErrorTitle = Template.bind({})
ErrorTitle.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.',
  variant: TextVariant.TITLE,
  mode: TextMode.ERROR,
}

export const ErrorSubtitle = Template.bind({})
ErrorSubtitle.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.',
  variant: TextVariant.SUBTITLE,
  mode: TextMode.ERROR,
}

export const ErrorParagraphDark = Template.bind({})
ErrorParagraphDark.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.',
  mode: TextMode.ERROR,
}
ErrorParagraphDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorTitleDark = Template.bind({})
ErrorTitleDark.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.',
  variant: TextVariant.TITLE,
  mode: TextMode.ERROR,
}
ErrorTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorSubtitleDark = Template.bind({})
ErrorSubtitleDark.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.',
  variant: TextVariant.SUBTITLE,
  mode: TextMode.ERROR,
}
ErrorSubtitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorParagraphColorful = Template.bind({})
ErrorParagraphColorful.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.',
  mode: TextMode.ERROR,
}
ErrorParagraphColorful.decorators = [ThemeDecorator(Theme.COLORFUL)]

export const ErrorTitleColorful = Template.bind({})
ErrorTitleColorful.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.',
  variant: TextVariant.TITLE,
  mode: TextMode.ERROR,
}
ErrorTitleColorful.decorators = [ThemeDecorator(Theme.COLORFUL)]

export const ErrorSubtitleColorful = Template.bind({})
ErrorSubtitleColorful.args = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, enim.',
  variant: TextVariant.SUBTITLE,
  mode: TextMode.ERROR,
}
ErrorSubtitleColorful.decorators = [ThemeDecorator(Theme.COLORFUL)]
