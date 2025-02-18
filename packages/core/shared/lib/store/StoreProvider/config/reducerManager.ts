import {
    // AnyAction,
    UnknownAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
    StateFromReducersMapObject,
    ActionFromReducersMapObject,
    ReducerFromReducersMapObject
} from '@reduxjs/toolkit';

import type {
    ReducerManager,
    GenericStateSchema, 
    FeatureState
} from './stateSchema.model';


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
 * @template TRequired - The type of the required state schema.
 * @template TOptional - The type of the optional state schema.
 */
export function createReducerManager<
    TRequired extends Record<string | number | symbol, FeatureState<any>>,
    TOptional extends Record<string | number | symbol, FeatureState<any>> = {}
>(
    // initialReducers: ReducersList<TRequired, TOptional>
    initialReducers: ReducersMapObject<GenericStateSchema<TRequired, TOptional>>
): ReducerManager<TRequired> {
    // Destructure the initial reducers object to create a mutable copy.
    const reducers = { ...initialReducers } as ReducersMapObject<GenericStateSchema<TRequired, TOptional>>;
    // Create a combined reducer from the initial reducers.
    let combinedReducer = combineReducers(reducers);
    // Keep track of keys to be removed.
    let keysToRemove: (keyof GenericStateSchema<TRequired, TOptional>)[] = [];

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
            state: GenericStateSchema<TRequired, TOptional> | undefined,
            action: UnknownAction
        ) => {
            if (keysToRemove.length > 0 && state) {
                state = { ...state };
                keysToRemove.forEach((key) => delete state?.[key]);
                keysToRemove = [];
            }

            // Cast the state and action to the appropriate types.
            return combinedReducer(
                state as StateFromReducersMapObject<ReducersMapObject<GenericStateSchema<TRequired, TOptional>>>,
                action as ActionFromReducersMapObject<ReducersMapObject<GenericStateSchema<TRequired, TOptional>>>
            );
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
            key: keyof TOptional,
            reducer: Reducer
        ) => {
            if (!key || reducers[key]) {
                return;
            }

            // Cast the reducer to the appropriate type.
            reducers[key] = reducer as ReducerFromReducersMapObject<ReducersMapObject<GenericStateSchema<TRequired, TOptional>>>;
            combinedReducer = combineReducers(reducers);
        },

        /**
         * Removes a reducer from the reducer map and updates the combined reducer.
         *
         * @param key - The key of the reducer to remove.
         *
         * @remarks If the key does not exist in the reducer map, this function does nothing.
         */
        remove: (key: keyof GenericStateSchema<TRequired, TOptional>) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
