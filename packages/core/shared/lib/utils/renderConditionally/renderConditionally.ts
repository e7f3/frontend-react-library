import React from 'react';

/**
 * Render a component conditionally
 * 
 * @param condition - condition to render
 * @param truthy - rendered if condition is true
 * @param falsy - rendered if condition is false, defaults to null
 * @returns {React.ReactNode} - rendered component
 */
export function renderConditionally(condition: boolean, truthy: React.ReactNode, falsy: React.ReactNode = null): React.ReactNode {
    return condition ? truthy : falsy;
}