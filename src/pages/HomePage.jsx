import { useEffect, useState } from "react";
import axios from "axios";

import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjc3Mjc4YjM4MTJlZTJkNWYyZDdiN2E2NzcyNjAzMyIsIm5iZiI6MTc0NzY2MTI5OC40MTYsInN1YiI6IjY4MmIzMWYyYjFiNDdjNDllODViNWE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._IHg7-Y9Fg2uGbOKNXczIGzj_ZIthFGNzSlzrMrh7zE",
    },
  };

  useEffect(() => {
    axios
      .get(url, options)
      .then((response) => setMovies(response.data.results))
      .catch((err) => console.error(err));
  }, []);

  return <>{movies.length > 0 && <MovieList movies={movies} />}</>;
}
