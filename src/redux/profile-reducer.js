const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 5 },
      { id: 2, message: "Its my first post", likesCount: "3" },
      { id: 3, message: "Hello", likesCount: "2" },
      { id: 4, message: "My name is Anton", likesCount: "7" },
    ],
    newPostText: "Write new Post",
}

const profileReduser = (state = initialState, action) => {
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