import {
  FC,
  MouseEvent,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { classNames, Mods } from 'shared/lib/utils/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'

import classes from './Modal.module.scss'

const CLOSE_DELAY = 200

export interface ModalProps {
  className?: string
  isOpen: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
  const { className, isOpen, onClose, lazy = true, children } = props

  const [isClosing, setIsClosing] = useState(false)
  const [wasOpened, setWasOpened] = useState(false)
  const timeoutIdRef = useRef() as MutableRefObject<
    ReturnType<typeof setTimeout>
  >

  const handleClose = useCallback(() => {
    if (isOpen) {
      setIsClosing(true)
      timeoutIdRef.current = setTimeout(() => {
        if (onClose) {
          onClose()
        }
        setIsClosing(false)
      }, CLOSE_DELAY)
    }
  }, [onClose, isOpen])

  const handleContentClick = (event: MouseEvent) => {
    event.stopPropagation()
  }

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    if (isOpen && !wasOpened) {
      setWasOpened(true)
    }
  }, [isOpen, wasOpened])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      clearTimeout(timeoutIdRef?.current)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  const mods: Mods = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
  }

  if (!wasOpened) {
    return null
  }

  return (
    <Portal>
      <div
        className={classNames(classes.Modal, mods, [className])}
        data-testid='modal-window'
      >
        <div className={classes.overlay} onClick={handleClose}>
          <div className={classes.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
