import { Profile, ValidateProfileError } from '../../types/profile';

// Здесь есть два варинта:
// 1. сделать обычную ф-ю, которая принимает profile в аргументе (более простой вариант)
// 2. сделать async thunk, который с помощью getState() достает этот профиль из стейта.

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    first: firstname, lastname, age, country,
  } = profile;
  const errors: ValidateProfileError[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
