import { useDispatch } from "react-redux";
//import { crearAnecdota } from "../actions/actions";

import { createAnecdote } from "../actions/actions";
import { setNotificationWithTimeout } from "../actions/actions";

export const AnecdoteForm = () => {
  // Obtiene la función de despacho de acciones de Redux
  const dispatch = useDispatch();

  // Función para agregar una nueva anécdota
  const agregarAnecdota = (evento) => {
    evento.preventDefault(); // Previene el comportamiento por defecto del formulario
    const content = evento.target.anecdote.value; // Obtiene el valor del input

    dispatch(createAnecdote(content));
    dispatch(
      setNotificationWithTimeout(`New anecdote added: "${content}"`, 5000)
    );

    evento.target.anecdote.value = ""; // Limpia el campo del formulario
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={agregarAnecdota}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};
