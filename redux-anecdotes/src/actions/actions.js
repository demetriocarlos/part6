
 import { setNotification } from "../reducers/notificationReducer";
 import { clearNotification } from "../reducers/notificationReducer";
 import anecdoteService from "../services/anecdotes"
import { setAnecdotes } from "../reducers/anecdoteReducer";
import { appendAnecdote } from "../reducers/anecdoteReducer";
import { updateAnecdote } from "../reducers/anecdoteReducer";


 export const setNotificationWithTimeout = (message, timeout) => {
  return async (dispatch) => {
    dispatch(setNotification(message));
    setTimeout(() => {
      dispatch(clearNotification());
    }, timeout);
  };
};


// Acción asíncrona para inicializar las anécdotas
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();// Obtiene todas las anécdotas del servicio
    dispatch(setAnecdotes(anecdotes));// Despacha la acción para establecer las anécdotas en el estado
  };
};

// Acción asíncrona para crear una nueva anécdota
export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content);// Crea una nueva anécdota en el servicio
    dispatch(appendAnecdote(newAnecdote));// Despacha la acción para añadir la nueva anécdota al estado
  };
};

// Acción asíncrona para votar una anécdota
export const voteAnecdote = (id) => {
  return async (dispatch, getState) => {
    const anecdotes = getState().anecdotes;// Obtiene el estado actual de las anécdotas
    const anecdoteToChange = anecdotes.find(a => a.id === id);// Encuentra la anécdota a cambiar
    const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 };// Incrementa el voto de la anécdota
    const updatedAnecdote = await anecdoteService.update(id, changedAnecdote);// Actualiza la anécdota en el servicio
    dispatch(updateAnecdote(updatedAnecdote));// Despacha la acción para actualizar la anécdota en el estado
  };
};






