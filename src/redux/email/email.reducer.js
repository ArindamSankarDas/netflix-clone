import { eventChange, eventContent } from "./email.utils";

const INITIAL_STATE = {
  emptyEmail: true,
  error: "",
};

const emailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_EMAIL":
      return {
        ...state,
        emptyEmail: eventChange(action.payload) ? true : false,
        error: eventContent(action.payload),
      };

    default:
      return state;
  }
};

export default emailReducer;
