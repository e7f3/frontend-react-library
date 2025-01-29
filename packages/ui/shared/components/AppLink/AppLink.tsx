import { classNames } from '@library/core/shared/utils/classNames/classNames'
import { FC, memo, PropsWithChildren } from 'react'
import { Link, LinkProps } from 'react-router-dom'


import classes from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface AppLinkProps extends LinkProps, PropsWithChildren {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...restProps
    } = props

    return (
        <Link
            className={classNames(classes.AppLink, {}, [className, classes[theme]])}
            to={to}
            {...restProps}
        >
            {children}
        </Link>
    )
})
