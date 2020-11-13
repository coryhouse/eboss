import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App"; // Named import
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
