import React from "react";
import { useSelector } from "react-redux"; //useSelector recebe os dados dos Reducers para os componentes
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Header.css";

export default function Header() {
  const reserveSize = useSelector((state) => state.reserve.length); // Aqui, a const está recebendo o length do nosso reducer de reservas

  return (
    <div className="main-header">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo Projeto" />
      </Link>

      <Link className="link-reservas" to="/reservas">
        <div>
          <strong>Minhas Reservas</strong>
          <span>{reserveSize} reservas</span>
        </div>
      </Link>
    </div>
  );
}
