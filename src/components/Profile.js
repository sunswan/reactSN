
import classes from './Profile.module.css';


function Profile() {
  return (
<div className= {classes.content}>
	<div > 
	<img src='https://img5.goodfon.ru/wallpaper/nbig/8/8b/abstraktsiia-kartinka-rendering-svetiashchiesia-volny-igra-s.jpg'/> 
	</div>	
	<div> ava  </div>
	<div className= {classes.posts} > my post
	<div className= {classes.item}> post1</div>
	<div className= {classes.item}> post2</div>
	</div>
</div>	

	);
}

export default Profile;
