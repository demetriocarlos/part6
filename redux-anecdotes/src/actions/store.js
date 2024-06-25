
import { configureStore } from "@reduxjs/toolkit";

import anecdoteReducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'


const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer,
      notification: notificationReducer,
    },
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV !== "production",
  });

  export default store

