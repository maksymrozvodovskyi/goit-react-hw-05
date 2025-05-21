import css from "./MoviesPage.module.css";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { useState } from "react";
import { fetchMovieByQuery } from "../../movie-api";

import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const [debouncedQuery] = useDebounce(query, 500);

  const handleChange = (e) => {
    const newQuery = e.target.value;

    const nextSearchParams = new URLSearchParams(searchParams); // створити копію

    if (newQuery !== "") {
      nextSearchParams.set("query", newQuery); //додати новий параметр
    } else {
      nextSearchParams.delete("query"); // видалити параметр
    }

    setSearchParams(nextSearchParams); // відправити копію в юрл
  };

  useEffect(() => {
    fetchMovieByQuery(debouncedQuery)
      .then((response) => {
        setMovies(response);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [debouncedQuery]);

  return (
    <div className={css.container}>
      <div className={css.searchBox}>
        <input
          type="text"
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
}
