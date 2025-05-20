import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  return (
    <>
      <p>MovieDetailsPage</p>
    </>
  );
}
