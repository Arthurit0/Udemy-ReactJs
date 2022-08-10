import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Rotas from "./Rotasv6";
import Header from "./components/Header";
import store from "./store/Store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Rotas />
      </BrowserRouter>
    </Provider>
  );
}
