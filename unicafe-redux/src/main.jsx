import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux";
//import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducer";

const store = createStore(reducer);

const App = () => {
  const good = () => {
    store.dispatch({
      type: "GOOD",
    });
  };

  const incrementOk = () => {
    store.dispatch({ type: "OK" });
  };

  const incrementBad = () => {
    store.dispatch({ type: "BAD" });
  };

  const resetStats = () => {
    store.dispatch({ type: "ZERO" });
  };

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={incrementOk}>ok</button>
      <button onClick={incrementBad}>bad</button>
      <button onClick={resetStats}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
