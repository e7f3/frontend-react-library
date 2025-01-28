import React, { FC, InputHTMLAttributes, memo } from 'react'

import { classNames, Mods } from 'shared/lib/utils/classNames/classNames'

import classes from './Input.module.scss'

type InputAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>

export interface InputProps extends InputAttributes {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    className,
    value,
    onChange,
    readonly = false,
    type = 'text',
    ...restProps
  } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  const mods: Mods = {
    [classes.readonly]: readonly,
  }

  return (
    <div className={classNames(classes.inputWrapper, mods, [className])}>
      <input
        className={classNames(classes.Input, {}, [])}
        value={value}
        onChange={handleChange}
        type={type}
        readOnly={readonly}
        data-testid='input'
        {...restProps}
      />
    </div>
  )
})
