import { ReducersMapObject } from '@reduxjs/toolkit';
import {
    FC,
    PropsWithChildren 
} from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import type {
    FeatureState,
    GenericStateSchema 
} from '../config/stateSchema.model';
import { createReduxStore } from '../config/store';

export interface StoreProviderProps<
    TRequired extends Record<string, FeatureState<unknown>>,
    TOptional extends Record<string, FeatureState<unknown>> = {}
> extends PropsWithChildren {
    initialState?: GenericStateSchema<TRequired, TOptional>
    asyncReducers?: DeepPartial<ReducersMapObject<GenericStateSchema<TRequired, TOptional>>>
}

/**
 * StoreProvider component that provides a Redux store to its child components.
 *
 * @param props - The properties for the StoreProvider component.
 * @param props.initialState - The initial state of the Redux store.
 * @param props.asyncReducers - An object of async reducers to be included in the store.
 * @param props.children - The child components that will have access to the store.
 *
 * @template TRequired - The type of the required state schema.
 * @template TOptional - The type of the optional state schema.
 *
 * @returns A React Redux Provider component that provides the Redux store to its children.
 */

export const StoreProvider = <
    TRequired extends Record<string, FeatureState<unknown>>,
    TOptional extends Record<string, FeatureState<unknown>> = {}
>(props: StoreProviderProps<TRequired, TOptional>) => {
    const {
        initialState, children, asyncReducers, 
    } = props;
    // const navigate = useNavigate()
    const store = createReduxStore(
        initialState,
        asyncReducers as ReducersMapObject<GenericStateSchema<TRequired, TOptional>>
    // navigate
    );
    console.log('render');

    return <Provider store={store}>{children}</Provider>;
};
