import { fireEvent, render, screen } from '@testing-library/react'

import { Input } from './Input'

describe('Input.test', () => {
  test('Simple Input.test', () => {
    render(<Input />)
    const input: HTMLInputElement = screen.getByTestId('input')

    fireEvent.change(input, { target: { value: 'Test' } })
    expect(input.value).toBe('Test')
  })
})
