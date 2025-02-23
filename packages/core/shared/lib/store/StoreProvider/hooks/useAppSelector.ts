import {
    TypedUseSelectorHook,
    useSelector 
} from 'react-redux';

import { RootState } from '../config/store';

/**
 * Creates a typed version of the useSelector hook from react-redux.
 *
 * This typed version of the hook is bound to the RootState type, which is
 * generic over the state type of the store. This allows the hook to infer the
 * type of the state from the type parameter passed to this function.
 *
 * @example
 * const useTypedSelector = createTypedSelector<MyState>();
 * const myState = useTypedSelector(state => state.myState);
 *
 * @template TState - The type of the state of the store.
 * @returns A typed version of the useSelector hook.
 */
export const createTypedSelector = <TState extends {}>() => {
    const useAppSelector: TypedUseSelectorHook<RootState<TState>> = useSelector;
    return useAppSelector;
};
  
export type AppSelector = Parameters<ReturnType<typeof createTypedSelector>>[0];
export type AppSelectorState = Parameters<AppSelector>[0];
