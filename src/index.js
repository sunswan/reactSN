import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import state, { addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText } from "./redux/state";
import reportWebVitals from "./reportWebVitals";


let rerenderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App 
      state={state} 
      addPost={addPost} 
      updateNewPostText={updateNewPostText}
      updateNewMessageText={updateNewMessageText}
		  addMessage={addMessage}/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
