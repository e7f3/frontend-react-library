import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'

import { Button, ButtonProps, ButtonSize, ButtonTheme, ButtonVariant } from './Button'

const meta: Meta<typeof Button> = {
    title: 'ui/Button',
    component: Button,
    args: {
        children: 'Text',
    },
};
 
export default meta;
type Story = StoryObj<typeof Button>;
const Template = (args: ButtonProps) => <Button {...args} />

export const Clean : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.CLEAN,
    }
}

export const CleanDisabled : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.CLEAN,
        disabled: true,
    }
}

export const Default : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.DEFAULT,
    }
}

export const DefaultDisabled : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.DEFAULT,
        disabled: true,
    }
}

export const Inverted : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.INVERTED,
    }
}

export const InvertedDisabled : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.INVERTED,
        disabled: true,
    }
}

export const DarkClean : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.CLEAN,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const DarkCleanDisabled : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.CLEAN,
        disabled: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const DarkDefault : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.DEFAULT,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const DarkDefaultDisabled : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.DEFAULT,
        disabled: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const DarkInverted : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const DarkInvertedDisabled : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.INVERTED,
        disabled: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const ColorfulClean : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.CLEAN,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}

export const ColorfulCleanDisabled : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.CLEAN,
        disabled: true,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}

export const ColorfulDefault : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.DEFAULT,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}

export const ColorfulDefaultDisabled : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.DEFAULT,
        disabled: true,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}

export const ColorfulInverted : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.INVERTED,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}

export const ColorfulInvertedDisabled : Story = {
    render: Template,
    args: {
        theme: ButtonTheme.INVERTED,
        disabled: true,
    },
    decorators: [ThemeDecorator(Theme.COLORFUL)]
}

export const MediumSize: Story = {
    render: Template,
    args: {
        theme: ButtonTheme.DEFAULT,
        size: ButtonSize.M,
    }
}

export const LargeSize: Story = {
    render: Template,
    args: {
        theme: ButtonTheme.DEFAULT,
        size: ButtonSize.L,
    }
}

export const XLargeSize: Story = {
    render: Template,
    args: {
        theme: ButtonTheme.DEFAULT,
        size: ButtonSize.XL,
    }
}

export const SquareVariant: Story = {
    render: Template,
    args: {
        theme: ButtonTheme.DEFAULT,
        variant: ButtonVariant.SQUARE,
        children: '>',
    }
}