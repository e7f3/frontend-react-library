import { classNames } from '@library/core/shared/utils/classNames/classNames'
import {
    FC, memo 
} from 'react'


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
    /**
     * Class name
     */
    className?: string
    /**
     * Text variant
     */
    variant?: TextVariant
    /**
     * Text mode
     */
    mode?: TextMode
    /**
     * Text content
     */
    content?: string | number
}

/**
 * Text component
 */
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
