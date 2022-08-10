// Sem Redux Saga:
// export function addReserve(id) {
//   return {
//     type: "ADD_RESERVE",
//     id,
//   };
// }

export function removeReserve(id) {
  return { type: "REMOVE_RESERVE", id };
}

export function updateAmountReserve(id, amount) {
  return {
    type: "UPDATE_RESERVE",
    id,
    amount,
  };
}

export function addReserveRequest(id) {
  return {
    type: "ADD_RESERVE_REQUEST",
    id,
  };
}
export function addReserveSuccess(trip) {
  return {
    type: "ADD_RESERVE_SUCCESS",
    trip,
  };
}
