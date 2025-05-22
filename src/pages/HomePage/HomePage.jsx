import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../movie-api";

import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then((response) => setMovies(response))
      .catch((err) => console.error(err));
  }, []);

  return <>{movies.length > 0 && <MovieList movies={movies} />}</>;
}
