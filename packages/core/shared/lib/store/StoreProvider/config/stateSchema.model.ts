import {
    // AnyAction,
    // CombinedState,
    UnknownAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
/**
 * The type of the combined state of the store.
 */
export type CombinedState<TState> = {
    [K in keyof TState]: TState[K];
};

/**
 * The type of the state of the store with optional slices.
 */
export type StateSchema<TState extends object> = {
    [key: string]: TState | undefined; // Allow optional slices
};

/**
 * The type of the list of reducers for the store.
 */
export type ReducersList<TState extends object> = {
    [name in keyof StateSchema<TState>]?: Reducer
};

/**
 * The type of the reducer manager for the store.
 */
export interface ReducerManager<TState extends object> {
    getReducerMap: () => ReducersMapObject<StateSchema<TState>>
    reduce: (state: StateSchema<TState>, action: UnknownAction) => CombinedState<StateSchema<TState>>
    add: (key: keyof StateSchema<TState>, reducer: Reducer) => void
    remove: (key: keyof StateSchema<TState>) => void
}

/**
 * The type of the store with the reducer manager.
 */
export interface StoreWithReducerManager<TState extends object> extends EnhancedStore<StateSchema<TState>> {
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
export interface ThunkApiConfig<T, TState extends object> {
    rejectValue: T
    extra: ThunkExtraArgument
    state: StateSchema<TState>
}
