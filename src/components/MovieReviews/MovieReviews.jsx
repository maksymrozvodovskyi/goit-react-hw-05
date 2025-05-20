import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);

  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;

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
      .then((response) => setReviews(response.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={css.reviewsContainer}>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id} className={css.reviewItem}>
              <h3 className={css.author}>{review.author}</h3>
              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviews}>
          We don't have any reviews for this movie
        </p>
      )}
    </div>
  );
}
