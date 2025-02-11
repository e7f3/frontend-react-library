import {
    Mods,
    classNames 
} from '@library/core/shared/utils/classNames/classNames';
import {
    ChangeEvent,
    FC,
    useCallback 
} from 'react';

import classes from './Textarea.module.scss';

type TextareaAttributes = Omit<
    React.HTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange' | 'readOnly'
>;

export interface TextareaProps extends TextareaAttributes {
    /**
     * Additional classes
     */
    className?: string
    /**
     * Textarea value
     */
    value?: string
    /**
     * onChange callback
     * @param value - new value
     */
    onChange?: (value: string) => void
    /**
     * Readonly flag
     */
    readonly?: boolean
}

/**
 * Textarea ui component
 */
export const Textarea: FC<TextareaProps> = (props) => {
    const {
        className, value, onChange, readonly = false, ...rest 
    } = props;

    const mods: Mods = { [classes.readonly]: readonly };

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => {
            onChange?.(event.target.value);
        },
        [ onChange ]
    );

    const onInput = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
    }, []);

    return (
        <div className={classNames(classes.Wrapper, mods, [ className ])}>
            <textarea
                className={classes.Textarea}
                value={value}
                onChange={handleChange}
                onInput={onInput}
                {...rest}
            />
        </div>
    );
};
