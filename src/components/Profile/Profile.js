
import classes from './Profile.module.css';
import Stories from './Stories/Stories';
import MyPosts from './Posts/MyPosts';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';


const Profile = (props) => {

return (
<div>
	<Stories/>
	<ProfileInfo />
	<MyPosts posts={props.state.posts}/>
</div>	

	);
}

export default Profile;
