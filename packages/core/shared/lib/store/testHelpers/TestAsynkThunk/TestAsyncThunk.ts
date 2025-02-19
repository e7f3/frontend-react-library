import {
    AsyncThunkAction,
    Dispatch 
} from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

import {
    GenericStateSchema,
    RequiredState,
    OptionalState
} from 'shared/lib/store/StoreProvider';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

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
    TRequired extends RequiredState,
    TOptional extends OptionalState = {}
> {
    dispatch: Dispatch;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    getState: () => GenericStateSchema<TRequired, TOptional>;

    actionCreator: ActionCreatorType<TReturned, TArg, TRejectValue>;

    constructor(
        actionCreator: ActionCreatorType<TReturned, TArg, TRejectValue>,
        state?: DeepPartial<GenericStateSchema<TRequired, TOptional>>
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as GenericStateSchema<TRequired, TOptional>);
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
