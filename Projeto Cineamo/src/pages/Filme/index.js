import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

import api from "../../services/api";

import "./filme-info.css";
import "../../assets/loading.css";

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadFilme() {
      const resp = await api.get(`r-api/?api=filmes/${id}`);
      if (resp.data.length === 0) {
        //Se ID não existe, redireciona para home
        navigate("/", { replace: true });
        return;
      }
      setFilme(resp.data);
      setLoading(false);
    }

    loadFilme();

    // "componentDidUnmount(), aqui é executado quanto o componente é desmontado"
    return () => {};
  }, [navigate, id]);

  function salvaFilme() {
    const myList = localStorage.getItem("filmes");

    let filmesSalvos = JSON.parse(myList) || []; // Caso não haja items no myList, filmesSalvos será um array vazio.

    // Procuramos se o filme selecionado já está salvo no localStorage
    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    // Se houver um filme salvo com este ID, alertar e ignorar
    if (hasFilme) {
      toast.info("Você já possui esse filme salvo!");
      return;
    }

    // Caso o filme não esteja na storage, salvar
    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

  if (loading) {
    return (
      <div className="loading">
        <img src={require("../../assets/loading.gif")} alt="loading..." />
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />
      <h3>Sinopse:</h3>
      {filme.sinopse}
      <div className="botoes">
        <button onClick={salvaFilme}>
          <div className="icon-button">
            <Icon className="icone" icon="bi:bookmark-fill" />
            Salvar
          </div>
        </button>
        <button>
          <div className="icon-button">
            <Icon className="icone" icon="bxs:movie-play" />
            <a
              target="_blank" //Para criar uma nova aba
              rel="noreferrer" //Medida de segurança contra injeção de HTML em browsers antigos
              href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}
            >
              Trailer
            </a>
          </div>
        </button>
      </div>
    </div>
  );
}
