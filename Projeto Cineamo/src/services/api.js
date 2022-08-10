import axios from "axios";

// https://sujeitoprogramador.com/r-api/?api=filmes/

// base URL: https://sujeitoprogramador.com/
// Rota dos Filmes: r-api/?api=filmes/
//  Rota do Filme com Id 123: r-api/?api=filmes/123

const api = axios.create({
  baseURL: "https://sujeitoprogramador.com/",
});

export default api;
