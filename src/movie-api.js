import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjc3Mjc4YjM4MTJlZTJkNWYyZDdiN2E2NzcyNjAzMyIsIm5iZiI6MTc0NzY2MTI5OC40MTYsInN1YiI6IjY4MmIzMWYyYjFiNDdjNDllODViNWE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._IHg7-Y9Fg2uGbOKNXczIGzj_ZIthFGNzSlzrMrh7zE",
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?language=en-US`, options);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?language=en-US`,
    options
  );
  return response.data.results;
};
