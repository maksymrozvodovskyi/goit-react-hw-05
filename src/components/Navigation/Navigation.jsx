import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => clsx(css.link, isActive && css.isActive)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => clsx(css.link, isActive && css.isActive)}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
