import axios from "axios";

export const baseImageUrl = "https://image.tmdb.org/t/p/original";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
