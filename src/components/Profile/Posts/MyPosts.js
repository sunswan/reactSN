
import classes from './MyPosts.module.css';
import Post from './Post/Post';



function MyPosts() {
return (	<div className= {classes.posts} >
	
<Post message= 'Hi, how are you?' count='5'/>
<Post message= 'Its my first post' count='3'/>
<Post message= 'Hello' count='2' />
<Post message= 'My name is Anton' count='7' />


</div>
	);
}

export default MyPosts;
