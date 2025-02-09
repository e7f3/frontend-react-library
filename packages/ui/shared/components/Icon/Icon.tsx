import { classNames } from '@library/core/shared/utils/classNames/classNames'
import {
    FC, SVGProps 
} from 'react'


import classes from './Icon.module.scss'

export enum ColoredWith {
    STROKE = 'stroke',
    FILL = 'fill',
    DEFAULT = 'default',
}

export interface IconProps {
    icon: FC<SVGProps<SVGSVGElement>>
    coloredWith?: ColoredWith
    coloredDeep?: boolean
    className?: string
}

export const Icon: FC<IconProps> = (props) => {
    const {
        icon: IconComponent,
        coloredWith = ColoredWith.DEFAULT,
        coloredDeep = false,
        className,
    } = props

    return (
        <IconComponent
            className={classNames(
                className,
                { [classes.coloredDeep]: coloredDeep, },
                [classes[coloredWith]]
            )}
        />
    )
}
