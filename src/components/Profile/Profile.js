
import classes from './Profile.module.css';
import MyPosts from './Posts/MyPosts';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';


const Profile = (props) => {

return (
<div>
	<ProfileInfo />
	<MyPosts posts={props.state.posts}/>
</div>	

	);
}

export default Profile;
