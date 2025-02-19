import {
    // AnyAction,
    // CombinedState,
    UnknownAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
    StateFromReducersMapObject,
    combineReducers
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
    data: T;
}

/**
 * Key for dynamic state registration
 */
export type StateSchemaKey = string;

/**
 * The type of the generic state of the store.
 */
export type GenericStateSchema<
    TRequired extends Record<string, FeatureState<unknown>>,
    TOptional extends Record<string, FeatureState<unknown>> = {}
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
    TRequired extends Record<string, FeatureState<unknown>>,
    TOptional extends Record<string, FeatureState<unknown>> = {}
> = {
    [K in keyof GenericStateSchema<TRequired, TOptional>]?: Reducer<GenericStateSchema<TRequired, TOptional>[K]>;
};

/**
 * The type of the reducer manager for the store.
 */
export interface ReducerManager<
    TRequired extends Record<string, FeatureState<unknown>>,
    TOptional extends Record<string, FeatureState<unknown>> = {}
> {
    getReducerMap: () => ReducersMapObject<GenericStateSchema<TRequired, TOptional>>
    reduce: (
        state: GenericStateSchema<TRequired, TOptional> | undefined, 
        action: UnknownAction
    ) => StateFromReducersMapObject<ReducersMapObject<GenericStateSchema<TRequired, TOptional>>>;
    add: <K extends keyof GenericStateSchema<TRequired, TOptional>>(key: K, reducer: Reducer) => void
    remove: <K extends keyof GenericStateSchema<TRequired, TOptional>>(key: K) => void
}

/**
 * The type of the store with the reducer manager.
 */
export interface StoreWithReducerManager<
    TRequired extends Record<string, FeatureState<unknown>>,
    TOptional extends Record<string, FeatureState<unknown>> = {}
>
    extends EnhancedStore<GenericStateSchema<TRequired, TOptional>> {
    reducerManager: ReducerManager<TRequired, TOptional>
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
    TRequired extends Record<string, FeatureState<unknown>>,
    TOptional extends Record<string, FeatureState<unknown>> = {}
> {
    rejectValue: TReject
    extra: ThunkExtraArgument
    state: GenericStateSchema<TRequired, TOptional>
}
