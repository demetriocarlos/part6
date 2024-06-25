import ReactDOM from "react-dom/client";
//import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import App from "./App";

import store from "./actions/store";

//store.subscribe(() => console.log(store.getState()));

//

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
