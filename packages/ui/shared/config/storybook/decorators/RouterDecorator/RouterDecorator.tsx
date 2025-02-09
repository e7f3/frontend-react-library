import { ReactRenderer } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { DecoratorFunction } from 'storybook/internal/types'

/**
 * Storybook Decorator for Router
 * @param Story - story
 * @param context - context
 * @returns 
 */
export const RouterDecorator: DecoratorFunction<ReactRenderer> = (Story, context) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
)
