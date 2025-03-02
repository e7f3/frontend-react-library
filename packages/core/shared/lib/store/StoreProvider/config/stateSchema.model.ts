import {
    UnknownAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

/**
 * The type of the base fetch state.
 */
export interface BaseFetchStateSchema {
    isLoading?: boolean;
    error?: string;
}

/**
 * Key for dynamic state registration
 */
export type StateSchemaKey = string;

/**
 * The type of the generic state of the store.
 */
export type State = Partial<Record<string, unknown>>;

/**
 * The type of the combined state of the store.
 */
export type CombinedState<TState extends State> = {
    [K in keyof TState]: TState[K];
};

/**
 * The type of the list of reducers for the store.
 */
export type ReducersList<
    TState extends State
> = {
    [K in keyof TState]?: Reducer<TState[K]>;
};

/**
 * The type of the reducer manager for the store.
 */
export interface ReducerManager<
    TState extends State
> {
    getReducerMap: () => ReducersMapObject<TState>
    reduce: (
        state: TState, 
        action: UnknownAction
    ) => TState;
    add: <K extends keyof TState>(key: K, reducer: Reducer) => void
    remove: <K extends keyof TState>(key: K) => void
}


/**
 * The type of the store with the reducer manager.
 */
export interface StoreWithReducerManager<
    TState extends State
>
    extends EnhancedStore<TState> {
    reducerManager: ReducerManager<TState>
}


/**
 * The type of the extra argument for a thunk.
 */
export interface ThunkExtraArgument {
    api: AxiosInstance
}

/**
 * The type of the configuration for a thunk.
 */
export interface GenericThunkApiConfig<
    TReject,
    TState extends State
> {
    rejectValue: TReject
    extra: ThunkExtraArgument
    state: TState
}

