import { ReducersMapObject } from '@reduxjs/toolkit';
import {
    FC,
    PropsWithChildren 
} from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import type { StateSchema } from '../config/stateSchema.model';
import { createReduxStore } from '../config/store';

export interface StoreProviderProps<TState extends object> extends PropsWithChildren {
    initialState?: StateSchema<TState>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema<TState>>>
}

/**
 * StoreProvider component that provides a Redux store to its child components.
 *
 * @param props - The properties for the StoreProvider component.
 * @param props.initialState - The initial state of the Redux store.
 * @param props.asyncReducers - An object of async reducers to be included in the store.
 * @param props.children - The child components that will have access to the store.
 *
 * @template TState - The type of the state schema.
 *
 * @returns A React Redux Provider component that provides the Redux store to its children.
 */

export const StoreProvider = <TState extends object>(props: StoreProviderProps<TState>) => {
    const {
        initialState, children, asyncReducers, 
    } = props;
    // const navigate = useNavigate()
    const store = createReduxStore(
        initialState,
        asyncReducers as ReducersMapObject<StateSchema<TState>>
    // navigate
    );
    console.log('render');

    return <Provider store={store}>{children}</Provider>;
};
