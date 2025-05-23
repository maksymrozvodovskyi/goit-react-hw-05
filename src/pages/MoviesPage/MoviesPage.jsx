import css from "./MoviesPage.module.css";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { fetchMovieByQuery } from "../../movie-api";
import toast, { Toaster } from "react-hot-toast";

import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const handleSumbit = (e) => {
    e.preventDefault();

    const newQuery = e.currentTarget.elements.search.value.trim();

    const nextSearchParams = new URLSearchParams(searchParams); // створити копію

    if (newQuery !== "") {
      nextSearchParams.set("query", newQuery); //додати новий параметр
    } else {
      toast.error("Please input something in search!");
      nextSearchParams.delete("query"); // видалити параметр
    }

    setSearchParams(nextSearchParams); // відправити копію в юрл
    e.target.reset();
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    fetchMovieByQuery(query)
      .then((response) => {
        setMovies(response);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [query]);

  return (
    <div className={css.container}>
      <div className={css.searchBox}>
        <form onSubmit={handleSumbit} className={css.form}>
          <input
            type="text"
            placeholder="Search movies"
            className={css.input}
            name="search"
          />
          <button type="submit" className={css.button}>
            Search
          </button>
          <Toaster position="top-right" />
        </form>
      </div>
      <MovieList movies={movies} />
    </div>
  );
}
