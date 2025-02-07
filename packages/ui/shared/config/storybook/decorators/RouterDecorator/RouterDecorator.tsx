import { ReactRenderer } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { DecoratorFunction } from 'storybook/internal/types'

export const RouterDecorator: DecoratorFunction<ReactRenderer> = (Story, context) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
)
