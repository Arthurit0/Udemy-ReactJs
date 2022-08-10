import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import "./home.css";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      // Fazer load dos dados da API pode demorar alguns segundos, logo, utilizamos uma função assíncrona
      const resp = await api.get("r-api/?api=filmes/"); //Com o axios, não é necessário reescrever toda a url,
      //  apenas a rota (pois já passamos a URL base em api.js)
      setFilmes(resp.data);
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <img src={require("../../assets/loading.gif")} alt="loading..." />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => (
          <article key={filme.id}>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <Link to={`/filme/${filme.id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
