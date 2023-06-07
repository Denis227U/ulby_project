import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User, // то, что возвращает response.data
  LoginByUsername, // payload
  ThunkConfig<string>
  // { rejectValue: string; extra: ThunkExtraArg } // rejectValue - это значение, которое возвращаем в блоке catch
>(
  'login/loginByUsername',
  async ({ username, password }, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.post('/login', {
        username, password,
      });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
