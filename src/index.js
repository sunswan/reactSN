import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [ 
		{id:1, message:'Hi, how are you?', likesCount:5},
		{id:2, message:'Its my first post', likesCount:'3'},
		{id:3, message:'Hello', likesCount:'2'},
		{id:4, message:'My name is Anton', likesCount:'7'},
]
  	

let dialogs = [ 
{id:1, name:'Dima'},
{id:2, name:'Andrey'},
{id:3, name:'Sasha'},
{id:4, name:'Anton'},
{id:5, name:'Sofia'},
{id:6, name:'Victor'},
{id:7, name:'Diana'}
]

let messages = [ 
{id:1, message:'Hi!'},
{id:2, message:'How is your name?'},
{id:3, message:'Yo!'},
{id:4, message:'Hello'},
{id:5, message:'H!'},
{id:6, message:'%)'},
{id:7, message:'***'}
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
