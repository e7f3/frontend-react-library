import { classNames } from '@library/core/shared/utils/classNames/classNames'
import {
    FC, ImgHTMLAttributes, memo, useMemo 
} from 'react'

import classes from './Avatar.module.scss'

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    /**
     * Class name
     */
    className?: string
    /**
     * Alt attribute text
     */
    alt: string
    /**
     * Image source
     */
    src?: string
    /**
     * Image size (px)
     */
    size?: number
}

/**
 * User avatar component
 */
export const Avatar: FC<AvatarProps> = memo((props) => {
    const {
        className, src, alt, size, ...rest 
    } = props
    const style = useMemo(
        () =>
            size || size === 0
                ? {
                    width: String(size).concat('px'),
                    height: String(size).concat('px'),
                }
                : {},
        [ size ]
    )
    return (
        <img
            className={classNames(classes.Avatar, {}, [ className ])}
            src={src}
            alt={alt}
            style={style}
            {...rest}
        />
    )
})
