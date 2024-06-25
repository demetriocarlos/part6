import { getAnecdotes } from "../services/services";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { updatedAnecdote } from "../services/services";
import { useNotification } from "../contexts/NotificationContext";

export const AnecdoteList = () => {
  // Obtener la instancia del QueryClient
  const queryClient = useQueryClient();
  // Obtenemos el dispatch del contexto de notificaciones
  const { dispatch } = useNotification();

  // Configurar la mutación para actualizar una anécdota
  const updateAnecdoteMutation = useMutation({
    mutationFn: updatedAnecdote, // Función que realiza la actualización
    onSuccess: () => {
      // Invalidar la consulta de anécdotas para refrescar los datos después de una actualización exitosa
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });

      // Establecemos una notificación de éxito
      dispatch({
        type: "SET_NOTIFICATION",
        payload: "Anecdote voted!",
      });
      // Limpiamos la notificación después de 5 segundos
      setTimeout(() => {
        dispatch({ type: "CLEAR_NOTIFICATION" });
      }, 5000);
    },
  });

  // Ejecutar la consulta para obtener todas las anécdotas
  const result = useQuery({
    queryKey: ["anecdotes"], // Clave de la consulta
    queryFn: getAnecdotes, // Función que realiza la consulta
    retry: 1,
  });

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  // console.log("result", result);

  // Obtener las anécdotas de los datos resultantes
  const anecdotes = result.data;

  //console.log("anecdotes", anecdotes);

  // Función para manejar el voto de una anécdota
  const handleVote = (anecdote) => {
    // Llamar a la mutación para actualizar la anécdota con un nuevo voto
    updateAnecdoteMutation.mutate({
      ...anecdote,
      votes: anecdote.votes + 1, // Incrementar el número de votos
    });
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};
