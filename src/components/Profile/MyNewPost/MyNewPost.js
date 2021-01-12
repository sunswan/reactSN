import React from "react";
import classes from "./MyNewPost.module.css";

const MyNewPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };
  
  let onPostChange = () => {
    let newtext = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newtext});
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
