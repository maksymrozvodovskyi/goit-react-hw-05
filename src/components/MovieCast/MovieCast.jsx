import css from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

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
      .then((response) => setCast(response.data.cast))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={css.castContainer}>
      {cast.length > 0 ? (
        <ul className={css.castList}>
          {cast.map((actor) => (
            <li key={actor.id} className={css.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                className={css.actorImage}
              />
              <h3 className={css.actorName}>{actor.name}</h3>
              <p className={css.character}>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noCast}>
          We don't have any cast information for this movie
        </p>
      )}
    </div>
  );
}
