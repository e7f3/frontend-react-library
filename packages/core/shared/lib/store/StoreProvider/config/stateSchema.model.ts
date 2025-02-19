import {
    // AnyAction,
    // CombinedState,
    UnknownAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
    StateFromReducersMapObject,
    combineReducers,
    EntityState
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

/**
 * The type of the base state of the store.
 */
export interface BaseSchema {
    isLoading?: boolean;
    error?: string;
}

/**
 * The type of the state of a feature in the store.
 */
export interface FeatureState<T> extends BaseSchema {
    data?: T;
}

/**
 * The type of the state of an entity in the store.
 */
export type EntityAdapterState<T, Id extends string = string> = BaseSchema & EntityState<T, Id>;

/**
 * The type of the simple state of the store.
 */
export type SimpleState = Record<string, unknown>;

/**
 * The type of the required state of the store.
 */
export type RequiredState = Record<string, FeatureState<unknown> | EntityAdapterState<unknown> | SimpleState>;

/**
 * The type of the optional state of the store.
 */
export type OptionalState = Partial<RequiredState>;

/**
 * Key for dynamic state registration
 */
export type StateSchemaKey = string;

/**
 * The type of the generic state of the store.
 */
export type GenericStateSchema<
    TRequired extends RequiredState,
    TOptional extends OptionalState = {}
> = TRequired & Partial<TOptional>;

/**
 * The type of the combined state of the store.
 */
export type CombinedState<TRequired> = {
    [K in keyof TRequired]: TRequired[K];
};

/**
 * The type of the list of reducers for the store.
 */
export type ReducersList<
    TRequired extends RequiredState,
    TOptional extends OptionalState = {}
> = {
    [K in keyof GenericStateSchema<TRequired, TOptional>]?: Reducer<GenericStateSchema<TRequired, TOptional>[K]>;
};

/**
 * The type of the reducer manager for the store.
 */
// export interface ReducerManager<
//     TRequired extends RequiredState,
//     TOptional extends OptionalState = {}
// > {
//     getReducerMap: () => ReducersMapObject<GenericStateSchema<TRequired, TOptional>>
//     reduce: (
//         state: GenericStateSchema<TRequired, TOptional> | undefined, 
//         action: UnknownAction
//     ) => StateFromReducersMapObject<ReducersMapObject<GenericStateSchema<TRequired, TOptional>>>;
//     add: <K extends keyof TOptional>(key: K, reducer: Reducer) => void
//     remove: <K extends keyof GenericStateSchema<TRequired, TOptional>>(key: K) => void
// }

export interface ReducerManager<
    TState extends {}
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
    TRequired extends RequiredState,
    TOptional extends OptionalState = {}
>
    extends EnhancedStore<GenericStateSchema<TRequired, TOptional>> {
    reducerManager: ReducerManager<GenericStateSchema<TRequired, TOptional>>
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
    TRequired extends RequiredState,
    TOptional extends OptionalState = {}
> {
    rejectValue: TReject
    extra: ThunkExtraArgument
    state: GenericStateSchema<TRequired, TOptional>
}
