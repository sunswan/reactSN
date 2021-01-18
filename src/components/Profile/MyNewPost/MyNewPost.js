import React from "react";
import classes from "./MyNewPost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "./../../../redux/profile-reducer";

const MyNewPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  
  let onPostChange = () => {
    let newtext = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(newtext)
    props.dispatch(action);
  };

  return (
    <div 
    className={classes.myNewPost}>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        className={classes.postForm}
        value={props.newPostText}
      />
      <div>
        <button 
        onClick={addPost} 
        className={classes.postButton}>
          Add post
        </button>
      </div>
    </div>
  );
};

export default MyNewPost;