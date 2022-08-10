import { call, put, all, takeLatest } from "redux-saga/effects";
import { addReserveSuccess } from "./actions";

import API from "../../../services/API";

function* addToReserve({ id }) {
  const response = yield call(API.get, `trips/${id}`); // Aqui, chama o JSON da viagem com o id do parâmetro

  yield put(addReserveSuccess(response.data)); // Aqui, envia para a nova action que irá para o reducer
}

export default all([takeLatest("ADD_RESERVE_REQUEST", addToReserve)]);
// Aqui, é onde inicia a função: A action com type "ADD_RESERVE_REQUEST" chama addToReserve
