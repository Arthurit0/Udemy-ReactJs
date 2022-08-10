import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Reservas.css";
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md";
import {
  removeReserve,
  updateAmountReserve,
} from "../store/modules/reservas/actions";

export default function Reservas() {
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reserve);
  const qt = useSelector((state) => state.reserve.amount);

  function handleRemove(id) {
    dispatch(removeReserve(id));
  }

  function decrementAmount(trip) {
    dispatch(updateAmountReserve(trip.id, trip.amount - 1));
  }

  function incrementAmount(trip) {
    dispatch(updateAmountReserve(trip.id, trip.amount + 1));
  }

  return (
    <div>
      <h1 className="title">
        Você solicitou {qt}
        {qt === 1 ? " reserva" : " reservas"}
      </h1>
      {reserves.map((reserve) => (
        <div className="reservas" key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <div id="amount">
            <button type="button" onClick={() => decrementAmount(reserve)}>
              <MdRemoveCircle size={20} color="#292929" />
            </button>
            <input type="text" readOnly value={reserve.amount} />
            <button type="button" onClick={() => incrementAmount(reserve)}>
              <MdAddCircle size={20} color="#292929" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              handleRemove(reserve.id); // Agora, chamamos uma função que recebe o ID da viagem
            }}
          >
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}
