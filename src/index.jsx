import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import store from "./store/index";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
