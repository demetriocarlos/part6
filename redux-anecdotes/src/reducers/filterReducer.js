
import { createSlice } from "@reduxjs/toolkit";

/*
// Reductor para manejar el estado del filtro
const filterReducer = (state = 'ALL', action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return action.payload
      default:
        return state
    }
  }

  // Acción para establecer el filtro
  export const  setFilter = filter => {
    return {
      type: 'SET_FILTER',
      payload: filter,
    }
  }

  export default filterReducer
*/

// Define el slice para el filtro
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload
    },
  },
})

// Exporta la acción y el reductor
export const { setFilter } = filterSlice.actions
export default filterSlice.reducer



