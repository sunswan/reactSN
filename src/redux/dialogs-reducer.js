const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let addMessage = state.newMessageText;
      state.messages.push({id: 8, message: addMessage});
      state.newMessageText = '';
      return state

      case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newmessage;
      return state
    default:
      return state
  }
}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (newmessage) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newmessage: newmessage })
export default dialogsReduser;