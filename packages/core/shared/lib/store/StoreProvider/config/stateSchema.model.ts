import {
    // AnyAction,
    // CombinedState,
    UnknownAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

export type CombinedState<TState> = {
    [K in keyof TState]: TState[K];
};

export type StateSchema<TState extends object> = {
    [key: string]: TState | undefined; // Allow optional slices
};

export type ReducersList<TState extends object> = {
    [name in keyof StateSchema<TState>]?: Reducer
};

export interface ReducerManager<TState extends object> {
    getReducerMap: () => ReducersMapObject<StateSchema<TState>>
    reduce: (state: StateSchema<TState>, action: UnknownAction) => CombinedState<StateSchema<TState>>
    add: (key: keyof StateSchema<TState>, reducer: Reducer) => void
    remove: (key: keyof StateSchema<TState>) => void
}

export interface StoreWithReducerManager<TState extends object> extends EnhancedStore<StateSchema<TState>> {
    reducerManager: ReducerManager<TState>
}

export interface ThunkExtraArgument {
    api: AxiosInstance
}

export interface ThunkApiConfig<T, TState extends object> {
    rejectValue: T
    extra: ThunkExtraArgument
    state: StateSchema<TState>
}
