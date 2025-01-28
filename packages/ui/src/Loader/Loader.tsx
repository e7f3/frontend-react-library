import { FC } from 'react'

import { classNames } from 'shared/lib/utils/classNames/classNames'

import classes from './Loader.module.scss'

export interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props
  return (
    <div className={classNames(classes.Loader, {}, [className])}>
      <span className={classes.dot} />
      <div className={classes.dots}>
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
