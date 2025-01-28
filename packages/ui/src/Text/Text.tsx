import { FC, memo } from 'react'

import { classNames } from 'shared/lib/utils/classNames/classNames'

import classes from './Text.module.scss'

export enum TextVariant {
  TITLE = 'title',
  SUBTITLE = 'subtitle',
  PARAGRAPH = 'paragraph',
  CAPTION = 'caption',
}

export enum TextMode {
  DEFAULT = 'default',
  ERROR = 'error',
}

export interface TextProps {
  className?: string
  variant?: TextVariant
  mode?: TextMode
  content?: string | number
}

export const Text: FC<TextProps> = memo((props) => {
  const {
    className,
    variant = TextVariant.PARAGRAPH,
    mode = TextMode.DEFAULT,
    content,
  } = props

  return (
    <div className={classNames(classes.Text, {}, [className, classes[mode]])}>
      {content && <p className={classes[variant]}>{content}</p>}
    </div>
  )
})
