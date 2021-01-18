
import  dialogsReduser  from "./dialogs-reducer";
import  profileReduser  from "./profile-reducer";
import sidebarReduser  from "./sidebar-reducer";

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

      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Anton" },
        { id: 5, name: "Sofia" },
        { id: 6, name: "Victor" },
        { id: 7, name: "Diana" },
      ],
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How is your name?" },
        { id: 3, message: "Yo!" },
        { id: 4, message: "Hello" },
        { id: 5, message: "H!" },
        { id: 6, message: "%)" },
        { id: 7, message: "??" },
      ],
      newMessageText: "Write new Message",
    },
    sidebarPage: {
      side: [
        { id: 1, },
        { id: 2, },
        { id: 3, },
        { id: 4, },
        { id: 5, },
        { id: 6, },
        { id: 7, },
      ],
    },
  },

  _callSubscriber() {
    console.log('state was changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReduser(this._state.sidebarPage, action);
    this._callSubscriber(this._state);
  },
}
  window.state = store;
  export default store;
