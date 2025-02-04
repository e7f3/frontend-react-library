
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'
import { Theme } from 'shared/providers/ThemeProvider'

import { Modal, ModalProps } from './Modal'
import { Text, TextVariant } from '../Text/Text'

const meta: Meta<typeof Modal> = {
    title: 'ui/Modal',
    component: Modal,
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
};
 
export default meta;
type Story = StoryObj<typeof Modal>;
const Template = (args: ModalProps) => <Modal {...args} />

export const Default: Story = {
    render: Template,
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
    render: Template,
    decorators: [ThemeDecorator(Theme.DARK)]
}
