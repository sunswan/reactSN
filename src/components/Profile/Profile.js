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
	dispatch={props.dispatch}/>

</div>	

	);
}

export default Profile;
