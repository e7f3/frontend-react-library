import {
    classNames,
    Mods
} from '@e7f3/core';
import {
    FC,
    memo,
    SelectHTMLAttributes,
    useCallback,
    useMemo 
} from 'react';


import classes from './Select.module.scss';

type SelectAttributes = Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
  'value' | 'onChange' | 'readOnly'
>;

export interface SelectOption<T extends string> {
    /**
     * Option value
     */
    value: T
    /**
     * Shown text
     */
    content: string
}

export interface SelectProps<T extends string> extends SelectAttributes {
    /**
     * Class name
     */
    className?: string
    /**
     * Label text
     */
    label?: string
    /**
     * Selected value
     */
    value?: T
    /**
     * onChange callback
     * @param value - selected value
     */
    onChange?: (value: T) => void
    /**
     * List of options to select from
     */
    options?: SelectOption<T>[]
    /**
     * Readonly flag
     */
    readonly?: boolean
}

/**
 * Select component
 */
export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        value,
        onChange,
        options,
        readonly = false, 
    } = props;

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            onChange?.(event.target.value as T);
        },
        [ onChange ]
    );

    const optionsList = useMemo(() => {
        return options?.map(({
            value: optionValue, content, 
        }) => (
            <option className={classes.option} value={optionValue} key={optionValue}>
                {content}
            </option>
        ));
    }, [ options ]);

    const mods: Mods = { [classes.readonly]: readonly };
    return (
        <div className={classNames(classes.Wrapper, mods, [ className ])}>
            <select
                className={classNames(classes.Select, {}, [])}
                value={value}
                onChange={handleChange}
                disabled={readonly}
            >
                {label && !value && (
                    <option className={classes.option} selected disabled hidden>
                        {label}
                    </option>
                )}
                {optionsList}
            </select>
            {label && value && <span className={classes.label}>{label}</span>}
        </div>
    );
};
