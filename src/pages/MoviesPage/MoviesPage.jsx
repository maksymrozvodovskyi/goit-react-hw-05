import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { fetchMovieByQuery } from "../../movie-api";

export default function MoviesPage() {
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
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [debouncedQuery]);

  return (
    <>
      <input
        type="text"
        placeholder="Search movies"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </>
  );
}
