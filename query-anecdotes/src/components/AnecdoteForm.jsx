import {
  useQuery,
  useMutation,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import { getAnecdotes, createAnecdote } from "../services/services";

import { useNotification } from "../contexts/NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient(); // Obtenemos la instancia de QueryClient para gestionar la caché de consultas
  // Obtenemos el dispatch del contexto de notificaciones
  const { dispatch } = useNotification();

  // Definimos la mutación para crear una nueva anécdota
  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote, // Función que se ejecutará cuando la mutación sea llamada
    onSuccess: (newAnecdote) => {
      // Función que se ejecuta si la mutación es exitosa

      // Invalidar la consulta haría que se vuelva a obtener los datos de las anécdotas, pero en vez de eso, las actualizamos manualmente:
      const anecdote = queryClient.getQueryData(["anecdotes"]); // Obtenemos los datos actuales de las anécdotas desde la caché
      queryClient.setQueryData(["anecdotes"], anecdote.concat(newAnecdote)); // Actualizamos la caché añadiendo la nueva anécdota
      dispatch({
        type: "SET_NOTIFICATION",
        payload: "Anecdote created!",
      });
      // Limpiamos la notificación después de 5 segundos
      setTimeout(() => {
        dispatch({ type: "CLEAR_NOTIFICATION" });
      }, 5000);
    },
  });

  // Función que se ejecuta cuando el formulario es enviado
  const onCreate = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value; // Obtenemos el valor del input del formulario

    event.target.anecdote.value = ""; // Limpiamos el input del formulario
    // Verificamos que el contenido tenga al menos 5 caracteres
    if (content.length < 5) {
      dispatch({
        type: "SET_NOTIFICATION",
        payload: "Anecdote content must be at least 5 characters long",
      });
      setTimeout(() => {
        dispatch({ type: "CLEAR_NOTIFICATION" });
      }, 5000);
      return;
    }

    // Ejecutamos la mutación para crear la nueva anécdota
    newAnecdoteMutation.mutate({ content, votes: 0 });

    console.log("new anecdote");
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
