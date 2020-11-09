
import classes from './MyPosts.module.css';


function MyPosts() {
  return (
	<div className= {classes.posts} > my post
	<div className= {classes.item}> post1</div>
	<div className= {classes.item}> post2</div>
	</div>
	);
}

export default MyPosts;
