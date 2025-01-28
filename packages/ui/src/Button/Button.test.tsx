// import { screen } from '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('Button ui component', () => {
  test('Appearance on screen', () => {
    render(<Button>Btn</Button>)

    screen.debug()
    expect(screen.getByText('Btn')).toBeInTheDocument()
  })
})
