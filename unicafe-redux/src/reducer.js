const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}
 
 // Reducer para manejar las acciones del feedback
const counterReducer = (state = initialState, action) => {
  // Imprime la acción recibida (útil para depuración)
  console.log(action)
  
  // Maneja las acciones basadas en el tipo de acción
  switch (action.type) {
    case 'GOOD':
      // Incrementa el contador de "good" y devuelve un nuevo estado
      return {
        ...state,
        good: state.good + 1
      }
    case 'OK':
      // Incrementa el contador de "ok" y devuelve un nuevo estado
      return {
        ...state,
        ok: state.ok + 1
      }
    case 'BAD':
      // Incrementa el contador de "bad" y devuelve un nuevo estado
      return {
        ...state,
        bad: state.bad + 1
      }
    case 'ZERO':
      // Restablece el estado a su valor inicial
      return initialState
    default:
      // Devuelve el estado actual si la acción no es reconocida
      return state
  }
}

 

 /*
 const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return state 
    case 'OK':
      return state 
    case 'BAD':
      return state 
    case 'ZERO':
      return state 
    default: return state
  }
  
}
*/



//.concat(action.payload)

export default counterReducer
