const API_KEY = "375b53f7c31dd1ed7e388db6bf583b15";

export const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrendingNow: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const REQUEST_DATA = [
  {
    heading: "NETFLIX ORIGINALS",
    url: requests.fetchNetflixOriginals,
  },
  {
    heading: "Trending Now",
    url: requests.fetchTrendingNow,
  },

  {
    heading: "Top Rated",
    url: requests.fetchTopRated,
  },
  {
    heading: "Action Movies",
    url: requests.fetchActionMovies,
  },
  {
    heading: "Comedy Movies",
    url: requests.fetchComedyMovies,
  },
  {
    heading: "Horror Movies",
    url: requests.fetchHorrorMovies,
  },
  {
    heading: "Romance Movies",
    url: requests.fetchRomanceMovies,
  },
  {
    heading: "Documentaries",
    url: requests.fetchDocumentaries,
  },
];
