import {
  ReducersMapObject, configureStore,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>, // для storybook
  navigate?: (to: To, options?: NavigateOptions)=> void,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState, // нужно для тестов, сторибуков, чтобы подготовить нужные
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        // в extraArgument можем передать любые нужные данные
        extraArgument: {
          api: $api,
          navigate,
        },
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
