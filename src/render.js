import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";
import { BrowserRouter} from "react-router-dom";
import "./index.css";


export let rerenderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App 
      state={state} 
      addPost={addPost} 
      updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
}
