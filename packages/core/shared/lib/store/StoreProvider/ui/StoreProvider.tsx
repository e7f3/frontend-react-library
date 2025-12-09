import { ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createReduxStore } from '../config/store.js';

export interface StoreProviderProps<
    TState extends {}
> extends PropsWithChildren {
    api: AxiosInstance;
    initialState?: TState
    reducers?: DeepPartial<ReducersMapObject<TState>>
}

/**
 * StoreProvider component that provides a Redux store to its child components.
 *
 * @param props - The properties for the StoreProvider component.
 * @param props.api - The Axios instance to use for API requests.
 * @param props.initialState - The initial state of the Redux store.
 * @param props.reducers - An object of reducers to be included in the store.
 * @param props.children - The child components that will have access to the store.
 *
 * @template TState - The type of the state of the Redux store.
 *
 * @returns A React Redux Provider component that provides the Redux store to its children.
 */

export const StoreProvider = <
    TState extends {}
>(props: StoreProviderProps<TState>) => {
    const {
        api,
        initialState,
        reducers,
        children,
    } = props;
    // const navigate = useNavigate()
    const store = createReduxStore(
        api,
        initialState,
        reducers as ReducersMapObject<TState>
        // navigate
    );
    console.log('render');

    return <Provider store={store}>{children}</Provider>;
};
