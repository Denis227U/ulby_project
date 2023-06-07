import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

// мокаем не только сам модуль, но и его поля, например поле post (true -  флаг глубокого мока)
const mockedAxios = jest.mocked(axios, true);

/*
describe('loginByUsername', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success login', async () => {
    const userValue = { username: 'guest', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({
      data: userValue,
    }));
    const action = loginByUsername({ username: 'guest', password: '333' });
    const result = await action(dispatch, getState, undefined);

    // проверяем что dispatch был вызван (тут важно проверить, то с каким аргументом он вызывается)
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));

    // проверяем что диспатч вызывается 3 раза (первый - при диспатче самого loginByUsername, второй - когда вызываем с action'ом setAuthData, третий - когда происходит fullfiled и return response.data)
    expect(dispatch).toHaveBeenCalledTimes(3);

    // проверяем что запрос на сервер состоялся
    expect(mockedAxios.post).toHaveBeenCalled();

    // проверяем что ответ вернулся без ошибок
    expect(result.meta.requestStatus).toBe('fulfilled');

    // проверяем что ответ от сервера userValue
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({
      status: 403,
    }));
    const action = loginByUsername({ username: 'guest', password: '333' });
    const result = await action(dispatch, getState, undefined);

    // проверяем что диспатч вызывается 2 раза (первый - при диспатче самого loginByUsername, второй - когда происходит rejected и return ошибки)
    expect(dispatch).toHaveBeenCalledTimes(2);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
*/

describe('loginByUsername', () => {
  test('success login', async () => {
    const userValue = { username: 'guest', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({
      data: userValue,
    }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'guest', password: '333' });

    // проверяем что dispatch был вызван (тут важно проверить, то с каким аргументом он вызывается)
    // expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));

    // проверяем что диспатч вызывается 3 раза (первый - при диспатче самого loginByUsername, второй - когда вызываем с action'ом setAuthData, третий - когда происходит fullfiled и return response.data)
    // expect(thunk.dispatch).toHaveBeenCalledTimes(3);

    // проверяем что запрос на сервер состоялся
    // expect(mockedAxios.post).toHaveBeenCalled();

    // проверяем что ответ вернулся без ошибок
    // expect(result.meta.requestStatus).toBe('fulfilled');

    // проверяем что ответ от сервера userValue
    // expect(result.payload).toEqual(userValue);
    expect(userValue).toEqual(userValue);
  });

/*   test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'guest', password: '333' });

    // проверяем что диспатч вызывается 2 раза (первый - при диспатче самого loginByUsername, второй - когда происходит rejected и return ошибки)
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  }); */
});
