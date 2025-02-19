import {
    configureStore,
    Reducer,
    ReducersMapObject,
    UnknownAction
} from '@reduxjs/toolkit';
import {
    AxiosInstance,
    CreateAxiosDefaults 
} from 'axios';


import { createApi } from 'shared/api/api';

import { createReducerManager } from './reducerManager';
import type {
    CombinedState,
    FeatureState,
    GenericStateSchema,
    OptionalState,
    RequiredState,
    ThunkExtraArgument 
} from './stateSchema.model';

/**
 * Creates a Redux store with the given initial state and reducers.
 *
 * @param api - The Axios instance to use for API requests.
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
    TRequired extends RequiredState,
    TOptional extends OptionalState = {}
>(
    api: AxiosInstance,
    initialState?: GenericStateSchema<TRequired, TOptional>,
    reducers?: ReducersMapObject<GenericStateSchema<TRequired, TOptional>>
) => {
    const rootReducers = {
        ...reducers,
    } as ReducersMapObject<GenericStateSchema<TRequired, TOptional>>;

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArgument = { api };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<
            CombinedState<GenericStateSchema<TRequired, TOptional>>,
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
    TRequired extends RequiredState,
    TOptional extends OptionalState = {}
> = ReducersMapObject<GenericStateSchema<TRequired, TOptional>>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];

