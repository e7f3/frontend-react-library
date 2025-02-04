import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'

import { Text, TextMode, TextProps, TextVariant } from './Text'

const meta: Meta<typeof Text> = {
    title: 'ui/Text',
    component: Text,
    args: {},
};
 
export default meta;
type Story = StoryObj<typeof Text>;
const Template = (args: TextProps) => <Text {...args} />

export const DefaultParagraph: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.'
    }
}

export const DefaultTitle: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        variant: TextVariant.TITLE,
    }
}

export const DefaultSubtitle: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        variant: TextVariant.SUBTITLE,
    }
}

export const DefaultParagraphDark: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const DefaultTitleDark: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        variant: TextVariant.TITLE,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const DefaultSubtitleDark: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        variant: TextVariant.SUBTITLE,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const DefaultParagraphColorful: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.'
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}

export const DefaultTitleColorful: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        variant: TextVariant.TITLE,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}

export const DefaultSubtitleColorful: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        variant: TextVariant.SUBTITLE,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}

export const ErrorParagraph: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        mode: TextMode.ERROR,
    }
}

export const ErrorTitle: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        mode: TextMode.ERROR,
        variant: TextVariant.TITLE,
    }
}

export const ErrorSubtitle: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        mode: TextMode.ERROR,
        variant: TextVariant.SUBTITLE,
    }
}

export const ErrorParagraphDark: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        mode: TextMode.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const ErrorTitleDark: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        mode: TextMode.ERROR,
        variant: TextVariant.TITLE,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}


export const ErrorSubtitleDark: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        mode: TextMode.ERROR,
        variant: TextVariant.SUBTITLE,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const ErrorParagraphColorful: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        mode: TextMode.ERROR,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}

export const ErrorTitleColorful: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        mode: TextMode.ERROR,
        variant: TextVariant.TITLE,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}

export const ErrorSubtitleColorful: Story = {
    render: Template,
    args: {
        content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quia.',
        mode: TextMode.ERROR,
        variant: TextVariant.SUBTITLE,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}
