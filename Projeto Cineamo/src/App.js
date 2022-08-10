import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// Os próprios criadores da API pedem para utilizar o CSS abaixo

import "./styles.css";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <div className="app">
      <AppRoutes />
      {/* Abaixo, disponibilizamos o toast em todos os nossos componentes
      definimos que ele irá fechar em 3000 milissegundos = 3 segundos */}
      <ToastContainer autoClose={3000} />
    </div>
  );
}
