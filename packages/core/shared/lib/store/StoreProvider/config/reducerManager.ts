import {
    // AnyAction,
    UnknownAction,
    combineReducers,
    Reducer,
    ReducersMapObject
} from '@reduxjs/toolkit';

import type {
    ReducerManager,
    StateSchema 
} from './stateSchema.model';

/**
 * Creates a reducer manager that allows dynamic addition and removal of reducers.
 *
 * @param initialReducers - An object containing the initial set of reducers.
 *
 * @returns An object with methods to manage reducers:
 *   - `getReducerMap`: Retrieves the current map of reducers.
 *   - `reduce`: The root reducer function that handles state updates and manages
 *     state removal for reducers marked for deletion.
 *   - `add`: Adds a new reducer to the reducer map and updates the combined reducer.
 *   - `remove`: Marks a reducer for removal from the reducer map and updates the
 *     combined reducer.
 *
 * @template TState - The type of the state schema.
 */

export function createReducerManager<TState extends object>(
    initialReducers: ReducersMapObject<StateSchema<TState>>
): ReducerManager<TState> {
    const reducers: ReducersMapObject<StateSchema<TState>> = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove: (keyof StateSchema<TState>)[] = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema<TState>, action: UnknownAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => delete state[key]);
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: keyof StateSchema<TState>, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: keyof StateSchema<TState>) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
