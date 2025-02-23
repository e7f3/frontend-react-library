import {
    AsyncThunkAction,
    Dispatch 
} from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

import '@testing-library/jest-dom';
import '@jest/globals';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

/**
 * The type of the action creator for an asynchronous thunk.
 */
type ActionCreatorType<TReturned, TArg, TRejectValue> = (
    arg: TArg
) => AsyncThunkAction<TReturned, TArg, { rejectValue: TRejectValue }>;

/**
 * TestAsyncThunk simplifies testing of asynchronous thunks by providing a controlled environment
 * where you can easily mock dependencies and verify the behavior of the thunk.
 * 
 * @example
 * test('Successful auth with loginByUsername.test', async () => {
 *     const userData = {
 *         username: 'admin',
 *         id: '1',
 *         avatar: 'https://www.cdu-langerwehe.de/assets/images/team.jpg',
 *     }
 *
 *     const thunk = new TestAsyncThunk(loginByUsername)
 *
 *     thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }))
 *
 *     const result = await thunk.callThunk({
 *         username: 'admin',
 *         password: '12345678',
 *     })
 *
 *     expect(thunk.dispatch).toHaveBeenCalledTimes(3)
 *     expect(thunk.dispatch).toHaveBeenCalledWith(
 *         userActions.setAuthData(userData)
 *     )
 *
 *     expect(thunk.api.post).toHaveBeenCalled()
 *     expect(result.meta.requestStatus).toBe('fulfilled')
 *     expect(result.payload).toBe(userData)
 *})
 */
export class TestAsyncThunk<
    TReturned,
    TArg,
    TRejectValue,
    TState extends {}
> {
    dispatch: Dispatch;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    getState: () => TState;

    actionCreator: ActionCreatorType<TReturned, TArg, TRejectValue>;

    constructor(
        actionCreator: ActionCreatorType<TReturned, TArg, TRejectValue>,
        state?: DeepPartial<TState>
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as TState);
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: TArg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        });
        return result;
    }
}
