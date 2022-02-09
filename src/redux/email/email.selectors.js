import { createSelector } from "reselect";

const selectEmail = (state) => state.email;

export const selectIsEmailEmpty = createSelector(
  [selectEmail],
  (email) => email.emptyEmail
);

export const selectErrorMessage = createSelector(
  [selectEmail],
  (email) => email.error
);
