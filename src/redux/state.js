let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 5 },
      { id: 2, message: "Its my first post", likesCount: "3" },
      { id: 3, message: "Hello", likesCount: "2" },
      { id: 4, message: "My name is Anton", likesCount: "7" },
    ],
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

    dialogs: [
      {
        id: 1,
        name: "Dima",
        avatar: "img src='https://f1.upet.com/A_r2u6uZhnxA_x.jpg'",
      },
      {
        id: 2,
        name: "Andrey",
        avatar: "https://pbs.twimg.com/media/B75IWd-CAAA4XnT.jpg",
      },
      { id: 3, name: "Sasha" },
      { id: 4, name: "Anton" },
      { id: 5, name: "Sofia" },
      { id: 6, name: "Victor" },
      { id: 7, name: "Diana" },
    ],
  },
};

export default state;
