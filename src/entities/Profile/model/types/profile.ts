import { Country, Currency } from 'shared/const/common';

export interface Profile {
  'first': string;
  'lastname': string;
  'age': number;
  'currency': Currency;
  'country': Country;
  'city': string;
  'username': string;
  'avatar': string;
}

// схема того, как профиль хранится в стейте
export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
