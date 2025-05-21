import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

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
