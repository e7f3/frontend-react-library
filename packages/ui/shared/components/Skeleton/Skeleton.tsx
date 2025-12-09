import { classNames } from '@e7f3/core';
import {
    FC,
    memo
} from 'react';


import { SkeletonConfig } from './Skeleton.const.js';
import classes from './Skeleton.module.scss';

export interface SkeletonProps {
    /**
     * Config for skeleton
     */
    config?: SkeletonConfig
    /**
     * Class name
     */
    className?: string,
}

/**
 * Skeleton component
 */
export const Skeleton: FC<SkeletonProps> = memo((props) => {
    const {
        config,
        className,
    } = props;

    return (
        <div
            className={classNames(classes.Skeleton, {}, [className])}>
            {config?.map((item, index) => (
                <div
                    key={index}
                    className={classNames(
                        classes.SkeletonElement,
                        { [classes.rounded]: item.shape === 'circle' },
                        [item.className]
                    )}
                    style={
                        {
                            width: item.width,
                            height: item.height,
                        }
                    }
                />
            ))}
        </div>
    );

});
