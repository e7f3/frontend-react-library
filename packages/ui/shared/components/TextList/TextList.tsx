import { classNames } from '@e7f3/core/shared/lib/utils/classNames/classNames';
import {
    FC,
    memo
} from 'react';

import classes from './TextList.module.scss';
import {
    Text,
    TextProps
} from '../Text/Text.js';

export interface TextListProps extends Omit<TextProps, 'content' | 'className'> {
    /**
     * Optional additional class name for the component
     */
    className?: string;
    /**
     * An array of strings to be displayed as list items
     */
    items: string[];
    /**
     * An optional string to separate each item in the list. Defaults to "|"
     */
    separator?: string;
}

/**
 * Renders a list of text items with an optional separator.
 */
export const TextList: FC<TextListProps> = memo((props) => {
    const {
        className, items, separator = '|', ...restProps
    } = props;
    return (
        <ul className={classNames(classes['text-list'], {}, [className])}>
            {items.map((item, index, array) => (
                <li className={classes['item']} key={item}>
                    <Text content={item} {...restProps} />
                    {index < array.length - 1 && (
                        <span className={classes['separator']}>
                            <Text content={separator} {...restProps} />
                        </span>
                    )}
                </li>
            ))}
        </ul>
    );
});