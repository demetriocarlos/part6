import { useNotification } from "../contexts/NotificationContext";

const Notification = () => {
  // Obtenemos el estado de las notificaciones desde el contexto
  const { state } = useNotification();

  // Si la notificación no es visible, no renderizamos nada
  if (!state.visible) {
    return null;
  }

  // Estilo para el mensaje de notificación
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  };

  // Renderizamos el mensaje de notificación
  return <div style={style}>{state.message}</div>;
};

export default Notification;
