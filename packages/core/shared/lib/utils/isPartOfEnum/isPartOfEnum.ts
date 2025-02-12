/**
 * Checks if a value is part of an enum
 * @param value - value
 * @param enumObject - enum
 * @returns boolean
 */
export function isPartOfEnum<T extends string>(
    value: string,
    enumObject: Record<string, T>
): value is T {
    return Object.values(enumObject).includes(value as T);
}
