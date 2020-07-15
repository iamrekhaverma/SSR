// Startup point for the client side application
import "babel-polyfill";
import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Routes from "./Routes";
import reducers from "./reducers";

const axiosInstance = axios.create({
  baseURL: "https://react-ssr-api.herokuapp.com/",
});

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
