
let rerenderEntireTree = () => {
  console.log('state was changed');
}

let state = {
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
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const addMessage = () => {
  let addMessage = {
    id: 8,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(addMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
