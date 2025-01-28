import { FC, ImgHTMLAttributes, memo, useMemo } from 'react'

import { classNames } from 'shared/lib/utils/classNames/classNames'

import classes from './Avatar.module.scss'

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  alt: string
  src?: string
  size?: number
}

export const Avatar: FC<AvatarProps> = memo((props) => {
  const { className, src, alt, size, ...rest } = props
  const style = useMemo(
    () =>
      size || size === 0
        ? {
            width: String(size).concat('px'),
            height: String(size).concat('px'),
          }
        : {},
    [size]
  )
  return (
    <img
      className={classNames(classes.Avatar, {}, [className])}
      src={src}
      alt={alt}
      style={style}
      {...rest}
    />
  )
})
