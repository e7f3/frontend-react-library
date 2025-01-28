import { render, screen } from '@testing-library/react'

import { Textarea } from './Textarea'

describe('Textarea ui component', () => {
  test('Appearance on screen', () => {
    render(<Textarea>Textarea</Textarea>)

    screen.debug()
    expect(screen.getByText('Textarea')).toBeInTheDocument()
  })
})
