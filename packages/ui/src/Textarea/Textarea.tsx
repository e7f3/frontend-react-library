import { ChangeEvent, FC, useCallback } from 'react'

import { Mods, classNames } from 'shared/lib/utils/classNames/classNames'

import classes from './Textarea.module.scss'

type TextareaAttributes = Omit<
  React.HTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange' | 'readOnly'
>

interface TextareaProps extends TextareaAttributes {
  className?: string
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Textarea: FC<TextareaProps> = (props) => {
  const { className, value, onChange, readonly = false, ...rest } = props

  const mods: Mods = {
    [classes.readonly]: readonly,
  }

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(event.target.value)
    },
    [onChange]
  )

  const onInput = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.style.height = 'auto'
    event.target.style.height = `${event.target.scrollHeight}px`
  }, [])

  return (
    <div className={classNames(classes.Wrapper, mods, [className])}>
      <textarea
        className={classes.Textarea}
        value={value}
        onChange={handleChange}
        onInput={onInput}
        {...rest}
      />
    </div>
  )
}
