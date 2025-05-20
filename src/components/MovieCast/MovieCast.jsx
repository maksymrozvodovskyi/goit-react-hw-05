import css from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchMovieCast } from "../../movie-api";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId)
      .then((response) => setCast(response))
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
