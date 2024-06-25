// Importamos los módulos necesarios de React
import { createContext, useReducer, useContext } from "react";

// Creamos un contexto para las notificaciones
const NotificationContext = createContext();

// Definimos el reducer que gestionará el estado de las notificaciones
const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return { message: action.payload, visible: true }; // Establece el mensaje de notificación y lo hace visible
    case "CLEAR_NOTIFICATION":
      return { message: "", visible: false }; // Limpia el mensaje de notificación y lo oculta
    default:
      return state;
  }
};

// Componente proveedor del contexto de notificaciones
// eslint-disable-next-line react/prop-types
export const NotificationProvider = ({ children }) => {
  // Usamos useReducer para manejar el estado de las notificaciones
  const [state, dispatch] = useReducer(notificationReducer, {
    message: "",
    visible: false,
  });

  // Proveemos el estado y el dispatch a través del contexto
  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Hook personalizado para usar el contexto de notificaciones
export const useNotification = () => useContext(NotificationContext);
