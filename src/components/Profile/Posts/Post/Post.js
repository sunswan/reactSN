
import classes from './Post.module.css';


function Post(props) {
  return (

	<div className= {classes.item}> 
	<img src='https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg'/> 
	
	{props.message}
    
	<div><span>Like {props.likesCount} </span></div> 


	</div>
	);
}

export default Post;
