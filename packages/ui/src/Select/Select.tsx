import { FC, memo, SelectHTMLAttributes, useCallback, useMemo } from 'react'

import { classNames, Mods } from 'shared/lib/utils/classNames/classNames'

import classes from './Select.module.scss'

type SelectAttributes = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'value' | 'onChange' | 'readOnly'
>

export interface SelectOption<T extends string> {
  value: T
  content: string
}

export interface SelectProps<T extends string> extends SelectAttributes {
  className?: string
  label?: string
  value?: T
  onChange?: (value: T) => void
  options?: SelectOption<T>[]
  readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, value, onChange, options, readonly = false } = props

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value as T)
    },
    [onChange]
  )

  const optionsList = useMemo(() => {
    return options?.map(({ value: optionValue, content }) => (
      <option className={classes.option} value={optionValue} key={optionValue}>
        {content}
      </option>
    ))
  }, [options])

  const mods: Mods = {
    [classes.readonly]: readonly,
  }
  return (
    <div className={classNames(classes.Wrapper, mods, [className])}>
      {label && value && <span className={classes.label}>{label}</span>}
      <select
        className={classNames(classes.Select, {}, [])}
        value={value}
        onChange={handleChange}
        disabled={readonly}
      >
        {label && !value && (
          <option className={classes.option} selected disabled hidden>
            {label}
          </option>
        )}
        {optionsList}
      </select>
    </div>
  )
}
