
import classes from './MyPosts.module.css';
import Post from './Post/Post';



function MyPosts(props) {

	let postsData = [ 
{id:1, message:'Hi, how are you?', likesCount:5},
{id:2, message:'Its my first post', likesCount:'3'},
{id:3, message:'Hello', likesCount:'2'},
{id:4, message:'My name is Anton', likesCount:'7'},
]
return (	

	<div className= {classes.posts} >
	<Post message={postsData[0].message} id={postsData[0].id} likesCount= {postsData[0].likesCount}/>
	<Post message={postsData[1].message} id={postsData[1].id} likesCount= {postsData[1].likesCount}/>
	<Post message={postsData[2].message} id={postsData[2].id} likesCount= {postsData[2].likesCount}/>
	<Post message={postsData[3].message} id={postsData[3].id} likesCount= {postsData[3].likesCount}/>

</div>

	);
}

export default MyPosts;
