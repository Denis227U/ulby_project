// воспользуемся реселектом, функцией createSelefctor. Она позволяет переиспользовать другие селекторы, которые у нас уже есть.
// хотя тут его использовать необязательно, т.к. никаких вычислений нам тут делать не нужно, но сделали для примера.
import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value,
);
