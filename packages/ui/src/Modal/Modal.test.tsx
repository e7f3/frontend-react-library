import { render, screen } from '@testing-library/react'

import { Modal } from './Modal'

describe('Modal.test', () => {
  test('Simple Modal.test', () => {
    const testContent =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore nihil quia hic similique minima corrupti iste expedita doloremque ipsa.'
    render(<Modal isOpen>{testContent}</Modal>)

    expect(screen.getByTestId('modal-window')).toBeInTheDocument()
  })
})
