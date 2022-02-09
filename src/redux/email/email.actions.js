export const setCurrentEmail = (email) => ({
  type: "SET_CURRENT_EMAIL",
  payload: email,
});

export const checkAuthentication = (authentication) => ({
  type: "CHECK_AUTHENTICATION",
  payload: authentication,
});
