import { all } from "redux-saga/effects";

import reserve from "./sagas";

export default function* rootSaga() {
  // Root, para os casos de haver mais sagas
  return yield all([reserve]);
}
