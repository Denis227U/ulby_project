import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User, // то, что возвращает response.data
  LoginByUsername, // payload
  { rejectValue: string } // это значение, которое возвращаем в блоке catch
>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username, password,
      });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
