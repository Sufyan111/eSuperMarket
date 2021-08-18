import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import {configStore} from "./State/Store/configStore";
import {Provider } from "react-redux";

const localstore= configStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={localstore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
