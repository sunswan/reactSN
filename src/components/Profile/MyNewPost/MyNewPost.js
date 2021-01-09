import React from "react";
import classes from "./MyNewPost.module.css";

const MyNewPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };
  
  let onPostChange = () => {
    let newtext = newPostElement.current.value;
    props.updateNewPostText(newtext);

  };

  return (
    <div 
    className={classes.myNewPost}>
      <div>
        <h3>My post!!!!</h3>
      </div>
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
