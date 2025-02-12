export type Mods = Record<string, string | boolean | undefined | null>;

/**
 * Concatenates class names to a string
 * @param baseClass - base class name
 * @param mods - an object where the key is a class name and the value is a boolean
 * @param additionalClasses - an array of additional class names
 * @returns string
 */
export function classNames(
    baseClass = '',
    mods: Mods = {},
    additionalClasses: Array<string | undefined> = []
): string {
    return [
        baseClass,
        ...Object.entries(mods)
            .filter(([ , value ]) => Boolean(value))
            .map(([ className ]) => className),
        ...additionalClasses.filter(Boolean),
    ]
        .filter(Boolean)
        .join(' ');
}
