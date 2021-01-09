import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} id={p.id} likesCount={p.likesCount} />
  ));

  return <div className={classes.posts}>{postsElement}</div>;
}

export default MyPosts;
