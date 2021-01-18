const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReduser = (state, action) => {
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