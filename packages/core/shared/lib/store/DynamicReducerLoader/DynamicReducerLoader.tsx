import {
    PropsWithChildren,
    useEffect 
} from 'react';
import {
    useDispatch,
    useStore 
} from 'react-redux';

import {
    ReducersList,
    GenericStateSchema,
    StoreWithReducerManager 
} from '../StoreProvider';
import { FeatureState } from '../StoreProvider/config/stateSchema.model';

export interface DynamicReducerLoaderProps<
    TRequired extends Record<string, FeatureState<any>>,
    TOptional extends Record<string, FeatureState<any>> = {}
> extends PropsWithChildren {
    /**
   * Object with reducers to add to the store. The keys of the object should match the state keys,
   */
    reducers: ReducersList<TRequired, TOptional>
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
export const DynamicReducerLoader = <
    TRequired extends Record<string, FeatureState<any>>,
    TOptional extends Record<string, FeatureState<any>> = {}
>(props: DynamicReducerLoaderProps<TRequired, TOptional>) => {
    const {
        reducers, removeAfterUnmount = true, children, 
    } = props;

    const dispatch = useDispatch();
    const store = useStore() as StoreWithReducerManager<TRequired, TOptional>;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([ reducerKey, reducer ]) => {
            const mounted = Boolean(mountedReducers[reducerKey as keyof GenericStateSchema<TRequired>]);

            if (!mounted) {
                store.reducerManager.add(reducerKey as keyof GenericStateSchema<TRequired, TOptional>, reducer);
                dispatch({ type: `@INIT ${reducerKey} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([ reducerKey, _ ]) => {
                    store.reducerManager.remove(reducerKey as  keyof GenericStateSchema<TRequired>);
                    dispatch({ type: `@DESTROY ${reducerKey} reducer` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
};
