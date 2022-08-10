import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../store/modules/rootReducers";
import rootSaga from "./modules/reservas/rootSaga";

const sagaMiddleware = createSagaMiddleware(); // Cria o middleWare

const enhancer = applyMiddleware(sagaMiddleware); // Aplicamos o Middleware criado em enhancer

const store = createStore(rootReducer, enhancer); // Criamos a Store com o enhancer

sagaMiddleware.run(rootSaga); // Iniciamos o sagaMiddleware com os nossos sagas criados

export default store;
