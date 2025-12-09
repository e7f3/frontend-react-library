import { classNames } from '@e7f3/core/shared/lib/utils/classNames/classNames';
import {
    FC,
    memo,
    PropsWithChildren 
} from 'react';
import {
    Link,
    LinkProps 
} from 'react-router-dom';

import classes from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export interface AppLinkProps extends LinkProps, PropsWithChildren {
    /**
     * Class name
     */
    className?: string
    /**
     * AppLink theme
     */
    theme?: AppLinkTheme
}

/**
 * Stylized version of react-router-dom Link component
 */
export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...restProps
    } = props;

    return (
        <Link
            className={classNames(classes.AppLink, {}, [ className, classes[theme] ])}
            to={to}
            {...restProps}
        >
            {children}
        </Link>
    );
});
