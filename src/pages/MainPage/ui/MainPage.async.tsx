import { lazy } from 'react';

export const MainPageAsync = lazy(
  () => new Promise((resolve) => {
    setTimeout(() => resolve(import('./MainPage') as never), 1000);
  }),
);
