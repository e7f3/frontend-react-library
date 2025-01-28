import { FC } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  parentElement?: HTMLElement
}

export const Portal: FC<PortalProps> = (props) => {
  const { children, parentElement = document.body } = props
  return createPortal(children, parentElement)
}
