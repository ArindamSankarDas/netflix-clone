import { combineReducers } from "redux";
import emailReducer from "./email/email.reducer";
import moviesReducer from "./movies/movies.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  email: emailReducer,
  movies: moviesReducer,
  user: userReducer,
});
