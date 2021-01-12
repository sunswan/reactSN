import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./redux/state";
import reportWebVitals from "./reportWebVitals";


let rerenderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App 
      state={state} 
      dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
