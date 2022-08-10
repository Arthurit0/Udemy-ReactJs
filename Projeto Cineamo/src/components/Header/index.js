import "./header.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header>
      <Link className="titulo" to="/">
        <Icon
          className="icone"
          icon="ri:movie-2-line"
          color="white"
          width="35"
        />
        <span>Cineamo</span>
      </Link>
      <Link className="fav" to="/favoritos">
        <Icon className="icone-fav" icon="bi:bookmark-fill" />
        <span>Salvos</span>
      </Link>
    </header>
  );
}
