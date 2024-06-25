import { useSelector, useDispatch } from "react-redux";

//import { votarAnécdota } from "../reducers/anecdoteReducer";
import { voteAnecdote } from "../actions/actions";

import { setNotificationWithTimeout } from "../actions/actions";

export const AnecdoteList = () => {
  // Obtiene la función de despacho de acciones de Redux
  const dispatch = useDispatch();

  // useSelector es un hook de React-Redux que nos permite seleccionar una parte del estado del store
  // Aquí estamos obteniendo las anécdotas y el filtro del estado
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    // Si el filtro está vacío, retornamos todas las anécdotas
    if (filter === "") {
      return anecdotes;
    }
    //// Si hay un filtro, retornamos solo las anécdotas que contienen el texto del filtro
    return anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const vote = (id) => {
    //console.log("vote", id);
    const anecdote = anecdotes.find((a) => a.id === id);
    dispatch(voteAnecdote(id)); // Despacha la acción de votar
    dispatch(
      setNotificationWithTimeout(`You voted for "${anecdote.content}"`, 5000)
    );
  };

  // Ordena las anécdotas por número de votos en orden descendente
  const anécdotasOrdenadas = [...anecdotes].sort((a, b) => b.votes - a.votes);

  //console.log("anec", anécdotasOrdenadas);

  return (
    <div>
      {anécdotasOrdenadas.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};
