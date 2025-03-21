import { classNames } from '@library/core/shared/lib/utils/classNames/classNames';
import {
    FC,
    HTMLAttributes,
    memo,
    PropsWithChildren 
} from 'react';


import classes from './Card.module.scss';

export enum CardTheme {
    DEFAULT = 'default',
    ACTION = 'action',
    WARNING = 'warning'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
    theme?: CardTheme
    className?: string
}

export const Card: FC<CardProps> = memo((props) => {
    const {
        theme = CardTheme.DEFAULT,
        className,
        onClick,
        role,
        children,
    } = props;
    return (
        <div
            className={classNames(classes.Card, {}, [ classes[theme], className ])}
            onClick={onClick}
            role={role}
        >
            {children}
        </div>
    );
});
