import { ButtonHTMLAttributes, FC, memo } from 'react'

import { classNames, Mods } from 'shared/lib/utils/classNames/classNames'

import classes from './Button.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
  colorScheme?: ButtonColorScheme
  size?: ButtonSize
  variant?: ButtonVariant
  className?: string
  disabled?: boolean
}

export enum ButtonTheme {
  'CLEAN' = 'cleanTheme',
  'DEFAULT' = 'defaultTheme',
  'INVERTED' = 'invertedTheme',
}

export enum ButtonColorScheme {
  'DEFAULT' = 'defaultColorScheme',
  'ACTION' = 'actionColorScheme',
  'WARNING' = 'warningColorScheme',
}

export enum ButtonVariant {
  'DEFAULT' = 'defaultVariant',
  'SQUARE' = 'squareVariant',
}

export enum ButtonSize {
  'M' = 'size_m',
  'L' = 'size_l',
  'XL' = 'size_xl',
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    theme = ButtonTheme.DEFAULT,
    colorScheme = ButtonColorScheme.DEFAULT,
    size = ButtonSize.M,
    variant = ButtonVariant.DEFAULT,
    children,
    disabled = false,
    ...restProps
  } = props

  const mods: Mods = {
    [classes[theme]]: Boolean(theme),
    [classes[colorScheme]]: Boolean(colorScheme),
    [classes[size]]: Boolean(size),
    [classes[variant]]: Boolean(variant),
    [classes.disabled]: disabled,
  }

  return (
    <button
      className={classNames(classes.Button, mods, [className])}
      type='button'
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
})
