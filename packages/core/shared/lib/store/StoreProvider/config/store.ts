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
    StateSchema,
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
export const createReduxStore = <TState extends object>(
    initialState?: StateSchema<TState>,
    reducers?: ReducersMapObject<StateSchema<TState>>
) => {
    const rootReducers: ReducersMapObject<StateSchema<TState>> = {
        ...reducers
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArgument = { api: $api };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<
            CombinedState<StateSchema<TState>>,
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

export type RootState<TState extends object> = ReducersMapObject<StateSchema<TState>>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
