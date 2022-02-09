import { REQUEST_DATA } from "./movies.data";

const INITIAL_STATE = {
  currentMovies: REQUEST_DATA,
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default moviesReducer;
