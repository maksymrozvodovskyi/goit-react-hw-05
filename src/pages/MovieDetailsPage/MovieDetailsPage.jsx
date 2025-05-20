import css from "./MovieDetailsPage.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjc3Mjc4YjM4MTJlZTJkNWYyZDdiN2E2NzcyNjAzMyIsIm5iZiI6MTc0NzY2MTI5OC40MTYsInN1YiI6IjY4MmIzMWYyYjFiNDdjNDllODViNWE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._IHg7-Y9Fg2uGbOKNXczIGzj_ZIthFGNzSlzrMrh7zE",
      },
    };

    axios
      .get(url, options)
      .then((response) => setMovie(response.data))
      .catch((err) => console.error(err));
  }, [movieId]);

  return (
    <>
      {movie && (
        <div className={css.container}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={css.poster}
          />
          <div className={css.details}>
            <h2 className={css.title}>{movie.title}</h2>
            <p className={css.overview}>{movie.overview}</p>
            <p className={css.info}>Release Date: {movie.release_date}</p>
            <p className={css.info}>Rating: {movie.vote_average}</p>
          </div>
        </div>
      )}
    </>
  );
}
