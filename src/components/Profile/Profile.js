import React from "react";
import Profileinfo from "./Profileinfo/Profileinfo";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyNewPostContainer";


const Profile = (props) => {
	return (
		<div>
			<Profileinfo />
			<MyPostsContainer store={props.store}/>
			
		</div>)

};

export default Profile;
