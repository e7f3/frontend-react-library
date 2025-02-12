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

export function createReducerManager<S extends object>(
    initialReducers: ReducersMapObject<StateSchema<S>>
): ReducerManager<S> {
    const reducers: ReducersMapObject<StateSchema<S>> = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove: (keyof StateSchema<S>)[] = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema<S>, action: UnknownAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => delete state[key]);
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: keyof StateSchema<S>, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: keyof StateSchema<S>) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
