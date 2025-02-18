import {
    configureStore,
    Reducer,
    ReducersMapObject,
    UnknownAction
} from '@reduxjs/toolkit';

import { $api } from 'shared/api/api';

import { createReducerManager } from './reducerManager';
import type {
    CombinedState,
    FeatureState,
    GenericStateSchema,
    ThunkExtraArgument 
} from './stateSchema.model';

/**
 * Creates a Redux store with the given initial state and reducers.
 *
 * @param initialState - The initial state of the store.
 * @param reducers - An object of reducers to be included in the store.
 *
 * @returns The created Redux store.
 *
 * @example
 * const store = createReduxStore(
 *     { counter: 0 },
 *     { counter: counterReducer }
 * );
 */
export const createReduxStore = <
    TRequired extends Record<string, FeatureState<any>>,
    TOptional extends Record<string, FeatureState<any>> = {}
>(
    initialState?: GenericStateSchema<TRequired, TOptional>,
    reducers?: ReducersMapObject<GenericStateSchema<TRequired, TOptional>>
) => {
    const rootReducers = {
        ...reducers,
    } as ReducersMapObject<GenericStateSchema<TRequired, TOptional>>;

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArgument = { api: $api };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<
            CombinedState<GenericStateSchema<TRequired>>,
            UnknownAction
        >,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type RootState<
    TRequired extends Record<string, FeatureState<any>>,
    TOptional extends Record<string, FeatureState<any>> = {}
> = ReducersMapObject<GenericStateSchema<TRequired, TOptional>>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];

