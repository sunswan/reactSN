import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
	<div className={classes.profileInfo}>
	<div> <h3>My post!!!!</h3> </div>
	<textarea className={classes.postForm}></textarea> 
	<div><button className={classes.postButton}>Add post</button></div>
</div>	

	);
}

export default ProfileInfo;
