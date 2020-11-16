
import classes from './Profile.module.css';
import Stories from './Stories/Stories';
import MyPosts from './Posts/MyPosts';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';


const Profile = () => {
  return (
<div>
	<Stories/>
	<ProfileInfo />
	<MyPosts/>
</div>	

	);
}

export default Profile;
