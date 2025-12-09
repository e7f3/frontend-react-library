import {
    configureStore,
    Reducer,
    ReducersMapObject,
    ThunkDispatch,
    UnknownAction
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { createReducerManager } from './reducerManager.js';
import type {
    CombinedState,
    ThunkExtraArgument
} from './stateSchema.model.js';

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
    TState extends {}
>(
    api: AxiosInstance,
    initialState?: TState,
    reducers?: ReducersMapObject<TState>
) => {
    const rootReducers = {
        ...reducers,
    } as ReducersMapObject<TState>;

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArgument = { api };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<
            CombinedState<TState>,
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
    TState extends {}
> = ReducersMapObject<TState>;
export type AppStore = ReturnType<typeof createReduxStore>;
// export type AppDispatch = AppStore['dispatch'];
export type AppDispatch<
    TState extends {}
> = ThunkDispatch<TState, ThunkExtraArgument, UnknownAction>;

