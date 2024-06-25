
import { createSlice } from "@reduxjs/toolkit"
 
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    updateAnecdote(state, action) {
      const id = action.payload.id;
      return state.map(anecdote => anecdote.id !== id ? anecdote : action.payload);
    },
  },
});

// Exporta las acciones y el reductor generado por el slice
 
export const { setAnecdotes, appendAnecdote, updateAnecdote } = anecdoteSlice.actions;


export default anecdoteSlice.reducer;

//export default reducer