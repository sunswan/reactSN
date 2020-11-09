
import classes from './Profile.module.css';
import Stories from './Stories/Stories';
import MyPosts from './Posts/MyPosts';


function Profile() {
  return (
<div className= {classes.content}>
	<Stories/>
	<MyPosts/>
</div>	

	);
}

export default Profile;
