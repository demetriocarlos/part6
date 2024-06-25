import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { AnecdoteForm } from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { AnecdoteList } from "./components/AnecdoteList";
import VisibilityFilter from "./components/VisibilityFilter";
import { initializeAnecdotes } from "./actions/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <VisibilityFilter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
