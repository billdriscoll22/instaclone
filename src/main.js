import Instagram from "./components/Instagram.jsx";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./stores/store.js";

ReactDOM.render(
  <Provider store={store}>
    <Instagram>
    </Instagram>
  </Provider>,
  document.getElementById('main')
);
