import css from "./App.module.css";
import { Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

export default function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
