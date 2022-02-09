import { createSelector } from "reselect";

const selectMovies = (state) => state.movies;

export const selectUpdatedMovies = createSelector(
  [selectMovies],
  (movies) => movies.currentMovies
);
