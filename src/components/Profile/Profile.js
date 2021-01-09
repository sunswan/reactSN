import classes from './Profile.module.css';
import MyPosts from './Posts/MyPosts';
import MyNewPost from '../Profile/MyNewPost/MyNewPost';


const Profile = (props) => {

return (
<div>
	<MyPosts 
	posts={props.profilePage.posts} 
	/>
	<MyNewPost 
	newPostText={props.profilePage.newPostText} 
	updateNewPostText={props.updateNewPostText}
	addPost={props.addPost}
	/>

</div>	

	);
}

export default Profile;
