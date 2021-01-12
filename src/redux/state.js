
let store = {
_state: {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 5 },
      { id: 2, message: "Its my first post", likesCount: "3" },
      { id: 3, message: "Hello", likesCount: "2" },
      { id: 4, message: "My name is Anton", likesCount: "7" },
    ],
    newPostText: "Write new Post",
  },

  dialogsPage: {
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How is your name?" },
      { id: 3, message: "Yo!" },
      { id: 4, message: "Hello" },
      { id: 5, message: "H!" },
      { id: 6, message: "%)" },
      { id: 7, message: "***" },
    ],

    newMessageText: "Write new Message",

    dialogs: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sasha" },
      { id: 4, name: "Anton" },
      { id: 5, name: "Sofia" },
      { id: 6, name: "Victor" },
      { id: 7, name: "Diana" },
    ],
  },
},
_callSubscriber () {
  console.log('state was changed');
},

getState (){
  return this._state;
},
subscribe (observer) {
  this._callSubscriber = observer;
},

_addPost () {
  let newPost = {
    id: 5,
    message: this._state.profilePage.newPostText,
    likesCount: 0,
  };
  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostText = '';
  this._callSubscriber(this._state);
},
_addMessage () {
  let addMessage = {
    id: 8,
    message: this._state.dialogsPage.newMessageText,
  };
  this._state.dialogsPage.messages.push(addMessage);
  this._state.dialogsPage.newMessageText = '';
  this._callSubscriber(this._state);
},
_updateNewPostText (newText) {
  this._state.profilePage.newPostText = newText;
  this._callSubscriber(this._state);
},
_updateNewMessageText (newMessage) {
  this._state.dialogsPage.newMessageText = newMessage;
  this._callSubscriber(this._state);
},
dispatch(action)
{switch (action.type) {
  case 'ADD-POST': this._addPost(); break;
  case 'ADD-MESSAGE': this._addMessage(); break;
  case 'UPDATE-NEW-POST-TEXT': this._updateNewPostText(action.newPostText); break;
  case 'UPDATE-NEW-MESSAGE-TEXT': this._updateNewMessageText(action.newMessageText); break;
}
}
}

window.state = store;
export default store;
