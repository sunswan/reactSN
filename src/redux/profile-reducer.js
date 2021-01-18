const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReduser = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {id: 5, message: state.newPostText, likesCount: 0,};
      state.posts.push(newPost);
      state.newPostText = '';
      return state

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newtext;
      return state
    default:
      return state
  }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (newtext) =>
  ({ type: UPDATE_NEW_POST_TEXT, newtext: newtext})
export default profileReduser;