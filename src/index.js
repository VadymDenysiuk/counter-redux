import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { increment, decrement } from "./redux/counter/counter-actions";
import { Provider } from "react-redux";

/* store.dispatch(increment(1))
store.dispatch(decrement(1)) */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
