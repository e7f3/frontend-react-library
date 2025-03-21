import { classNames } from '@library/core/shared/lib/utils/classNames/classNames';
import { FC } from 'react';

import classes from './Loader.module.scss';

export interface LoaderProps {
    /**
     * Additional classes
     */
    className?: string
}

/**
 * Loader component
 */
export const Loader: FC<LoaderProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(classes.Loader, {}, [ className ])}>
            <span className={classes.dot} />
            <div className={classes.dots}>
                <span />
                <span />
                <span />
            </div>
        </div>
    );
};
