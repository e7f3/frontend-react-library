import { useDispatch } from 'react-redux';

import { AppDispatch } from '../config/store';

/**
 * Creates a typed version of the useDispatch hook from react-redux.
 *
 * This typed version of the hook is bound to the AppDispatch type, which is
 * generic over the state type of the store. This allows the hook to infer the
 * type of the state from the type parameter passed to this function.
 *
 * @example
 * const useTypedDispatch = createTypedDispatch<MyState>();
 * const dispatch = useTypedDispatch();
 *
 * @template TState - The type of the state of the store.
 * @returns A typed version of the useDispatch hook.
 */
export const createTypedDispatch = <TState extends {}>() => {
    const useAppDispatch: () => AppDispatch<TState> = useDispatch;
    return useAppDispatch;
};