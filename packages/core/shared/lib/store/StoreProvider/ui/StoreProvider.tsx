import { ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import type {
    GenericStateSchema, 
    OptionalState, 
    RequiredState
} from '../config/stateSchema.model';
import { createReduxStore } from '../config/store';

export interface StoreProviderProps<
    TRequired extends RequiredState,
    TOptional extends OptionalState = {}
> extends PropsWithChildren {
    api: AxiosInstance;
    initialState?: GenericStateSchema<TRequired, TOptional>
    reducers?: DeepPartial<ReducersMapObject<GenericStateSchema<TRequired, TOptional>>>
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
 * @template TRequired - The type of the required state schema.
 * @template TOptional - The type of the optional state schema.
 *
 * @returns A React Redux Provider component that provides the Redux store to its children.
 */

export const StoreProvider = <
    TRequired extends RequiredState,
    TOptional extends OptionalState = {}
>(props: StoreProviderProps<TRequired, TOptional>) => {
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
        reducers as ReducersMapObject<GenericStateSchema<TRequired, TOptional>>
    // navigate
    );
    console.log('render');

    return <Provider store={store}>{children}</Provider>;
};
