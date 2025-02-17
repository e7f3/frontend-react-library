import {
    classNames,
    Mods 
} from '@library/core/shared/lib/utils/classNames/classNames';
import {
    FC,
    memo,
    useMemo 
} from 'react';

import classes from './StepsList.module.scss';
import { Text } from '../Text/Text';


export interface StepsElement {
    /**
     * Marker
     */
    marker: string | number,
    /**
     * Text content
     */
    content: string | string[],
}

export interface StepsListProps {
    /**
     * List order
     */
    order: 'asc' | 'desc',
    /**
     * List direction
     */
    direction: 'row' | 'column',
    /**
     * Show line flag
     */
    line?: boolean,
    /**
     * List elements
     */
    elements: StepsElement[],
    /**
     * Class name
     */
    className?: string,
}


export const StepsList: FC<StepsListProps> = memo((props) => {
    const {
        elements,
        order = 'asc',
        direction = 'row',
        line = false,
        className, 
    } = props;

    const mods: Mods = {
        [classes.row]: direction === 'row',
        [classes.column]: direction === 'column',
    };

    const sortedElements = useMemo(() => order === 'asc' ? elements : elements.reverse(), [ elements, order ]);
    const showLine = line && elements?.length > 1;

    return (
        <div className={classNames(classes['steps-list'], mods, [ className ])}>
            {sortedElements.map((item, index) => (
                <div className={classes.item} key={`steps-element-${index}`} data-index={index}>
                    <div className={classNames(classes['marker-container'], { [classes['with-line']]: showLine })}>
                        {showLine && elements && <span className={classes['line']}/>}
                        <div className={classes['marker']}>
                            <Text content={item.marker} />
                        </div>
                    </div>
                    <div className={classes.content}>
                        {Array.isArray(item.content) ? (
                            item.content.map((content, index) => (
                                <Text content={content} key={`steps-element-paragraph-${index}`} />
                            ))
                        ) : <Text content={item.content} />}
                    </div>
                </div>
            ))}
        </div>
    );
});
