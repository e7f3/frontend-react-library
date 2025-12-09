import {
    UnknownAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
    ReducerFromReducersMapObject,
    ActionFromReducer
} from '@reduxjs/toolkit';

import type { ReducerManager } from './stateSchema.model.js';


/*************  ✨ Codeium Command ⭐  *************/
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
export function createReducerManager<
    TState extends {}
>(
    // initialReducers: ReducersList<TRequired, TOptional>
    initialReducers: ReducersMapObject<TState>
): ReducerManager<TState> {
    // Destructure the initial reducers object to create a mutable copy.
    const reducers = { ...initialReducers };
    // Create a combined reducer from the initial reducers.
    let combinedReducer = combineReducers(reducers);
    // Keep track of keys to be removed.
    let keysToRemove: (keyof TState)[] = [];

    return {
        // Return the current map of reducers.
        getReducerMap: () => reducers,

        /**
         * The root reducer function that processes actions and updates the state.
         *
         * @param state - The current state of the store, or undefined if no state has been set.
         * If there are keys marked for removal, they will be deleted from the state.
         * 
         * @param action - The action object that may trigger state changes.
         *
         * @returns The new state after applying the action, with any necessary state 
         * removals processed.
         */
        reduce: (
            state: TState,
            action: UnknownAction
        ) => {
            if (keysToRemove.length > 0 && state) {
                state = { ...state };
                keysToRemove.forEach((key) => delete state?.[key]);
                keysToRemove = [];
            }

            // Cast the state and action to the appropriate types.
            return combinedReducer(
                state,
                action as ActionFromReducer<ReducerFromReducersMapObject<ReducersMapObject<TState, UnknownAction>>>
            ) as TState;
        },

        /**
         * Adds a new reducer to the reducer map and updates the combined reducer.
         *
         * @param key - The key to use for the reducer in the reducer map.
         * @param reducer - The reducer function to add.
         *
         * @remarks If the key already exists in the reducer map, the new reducer will not be added.
         */
        add: (
            key: keyof TState,
            reducer: Reducer
        ) => {
            if (!key || reducers[key]) {
                return;
            }

            // Cast the reducer to the appropriate type.
            reducers[key] = reducer as ReducersMapObject<TState>[keyof TState];
            combinedReducer = combineReducers(reducers);
        },

        /**
         * Removes a reducer from the reducer map and updates the combined reducer.
         *
         * @param key - The key of the reducer to remove.
         *
         * @remarks If the key does not exist in the reducer map, this function does nothing.
         */
        remove: (key: keyof TState) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
