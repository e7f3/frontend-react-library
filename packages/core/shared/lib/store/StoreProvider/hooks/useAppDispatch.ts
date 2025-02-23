import { useDispatch } from 'react-redux';

import { AppDispatch } from '../config/store';

/**
 * Typed version of the useDispatch hook from react-redux.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
