import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = (props) => {

  let postsElement =
    props.posts.map( p =>
      <Post
        message={p.message}
        likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => { props.addPost() };

  let onPostChange = () => {
    let newtext = newPostElement.current.value;
    props.updateNewPostTextActionCreator(newtext);
  };

  return (
    <div>
      <div className={classes.posts}>{postsElement}</div>

      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          className={classes.postForm}
          value={props.newPostText}
        />
        <div>
          <button
            onClick={onAddPost}
            className={classes.postButton}>
            Add post
        </button>
        </div>
      </div>

    </div>
  );
};

export default MyPosts;
