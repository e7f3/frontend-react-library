
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/providers/ThemeProvider'

import { Modal } from './Modal'
import { Text, TextVariant } from '../Text/Text'

const meta = {
    title: 'ui/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    args: {
        children: (
            <Text
                content={
                    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Soluta debitis autem sapiente amet officiis quasi fuga in dolorum cumque maiores.`
                }
                variant={TextVariant.PARAGRAPH}
            />
        ),
        isOpen: true,
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;
 
export default meta;
type Story = StoryObj<typeof Modal>;

export const defaultModal: Story = {
    name: 'Default',
    parameters: {
        backgrounds: {
            default: Theme.LIGHT
        }
    }
}

export const darkThemeModal: Story = {
    name: 'Dark theme - Default',
    parameters: {
        backgrounds: {
            default: Theme.DARK
        }
    },
    globals: {
        theme: Theme.DARK
    }
}
