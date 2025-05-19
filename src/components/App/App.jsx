import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage";

export default function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
