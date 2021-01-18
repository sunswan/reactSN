import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (newtext) => {
    let action = updateNewPostTextActionCreator(newtext);
    props.store.dispatch(action);
  };

  return (
  <MyPosts
    updateNewPostTextActionCreator={onPostChange}
    addPost={addPost}
    posts={state.profilePage.posts} 
    newPostText={state.profilePage.newPostText}
    />)
};

      
export default MyPostsContainer;