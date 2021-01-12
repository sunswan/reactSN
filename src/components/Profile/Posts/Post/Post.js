
import classes from './Post.module.css';


function Post(props) {
  return (

	<div className= {classes.item}> 
	<img src='https://avavatar.ru/images/original/2/QMET7Go6mgVpZAiq.jpg'/> 
	
	{props.message}
    
	<div><span>Like {props.likesCount} </span></div> 


	</div>
	);
}

export default Post;
