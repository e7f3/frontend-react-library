import { Reducer } from '@reduxjs/toolkit';
import {
    FC,
    PropsWithChildren,
    useEffect 
} from 'react';
import {
    useDispatch,
    useStore 
} from 'react-redux';

import {
    ReducersList,
    StateSchema,
    StoreWithReducerManager 
} from '../StoreProvider';

export interface DynamicReducerLoaderProps<TState extends object> extends PropsWithChildren {
    /**
   * Object with reducers to add to the store. The keys of the object should match the state keys,
   */
    reducers: ReducersList<TState>
    /**
   * Whether to remove the reducers from the store when the component is unmounted
   */
    removeAfterUnmount?: boolean
}

/**
 * Component to dynamically load reducers into the store.
 *
 * @param reducers - Object with reducers to add to the store. The keys of the object should match the state keys,
 * and the values should be the reducers themselves.
 * @param removeAfterUnmount - Whether to remove the reducers from the store when the component is unmounted.
 *
 * @returns The children of the component.
 *
 * @example
 * import { counterReducer } from './counterReducer';
 *
 * const App = () => {
 *   return (
 *     <DynamicReducerLoader reducers={{ counter: counterReducer }}>
 *       <Counter />
 *     </DynamicReducerLoader>
 *   );
 * };
 */
export const DynamicReducerLoader = <TState extends object>(props: DynamicReducerLoaderProps<TState>) => {
    const {
        reducers, removeAfterUnmount = true, children, 
    } = props;

    const dispatch = useDispatch();
    const store = useStore() as StoreWithReducerManager<TState>;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([ reducerKey, reducer ]) => {
            const mounted = Boolean(mountedReducers[reducerKey as keyof StateSchema<TState>]);

            if (!mounted) {
                store.reducerManager.add(reducerKey as keyof StateSchema<TState>, reducer!);
                dispatch({ type: `@INIT ${reducerKey} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([ reducerKey, _ ]) => {
                    store.reducerManager.remove(reducerKey as  keyof StateSchema<TState>);
                    dispatch({ type: `@DESTROY ${reducerKey} reducer` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
};
