import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

// у нас сам токен внутри заголовка authorization не проверяется, проверяется только наличие самого загоовка.
// если авторизованы, то по ключу USER_LOCALSTORAGE_KEY там что-то есть, если не авторизованы, то вернется undefined и ключ не добавится в запрос. Ну и сервак этот запрос не пропустит

// const baseURL = __IS_DEV__ ? 'http://localhost:8000' : 'http://production.ru';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
  },
});
