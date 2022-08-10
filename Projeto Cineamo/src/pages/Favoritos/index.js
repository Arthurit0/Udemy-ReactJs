import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./favoritos.css";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("filmes");

    setFilmes(JSON.parse(myList) || []);
  }, []);

  function handleDelete(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    }); //Filtra do array de filmes apenas os filmes que não possuem o id do parâmetro, ou seja, remove apenas aquela com o mesmo id

    // Salvamos no array de filmes e no localStorage
    setFilmes(filtroFilmes);
    localStorage.setItem("filmes", JSON.stringify(filtroFilmes));

    toast.success("Filme excluído da lista de favoritos!");
  }

  return (
    <div className="container">
      <h1>Filmes Salvos</h1>
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo!</span>}
      {/* Renderização condicional: se não houver filmes na lista de favoritos, exibe esta mensagem */}

      <ul>
        {filmes.map((filme) => (
          <li key={filme.id}>
            <span>{filme.nome}</span>
            <div>
              <Link to={`/filme/${filme.id}`}>Detalhes</Link>
              <button
                onClick={
                  () => handleDelete(filme.id) // Função anônima para não ser executada sozinha...
                }
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
