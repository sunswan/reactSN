import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;

	return <div className={classes.dialog + ' ' + classes.active}> <NavLink to={path}> {props.name} </NavLink></div>
}

const Messages = (props) => {
	return 	<div className={classes.message}>{props.message}</div>	
}

const Dialogs = (props) => {

let dialogsData = [ 
{id:1, name:'Dima'},
{id:2, name:'Andrey'},
{id:3, name:'Sasha'},
{id:4, name:'Anton'},
{id:5, name:'Sofia'},
{id:6, name:'Victor'},
{id:7, name:'Diana'}
]

let messagesData = [ 
{id:1, message:'Hi!'},
{id:2, message:'How is your name?'},
{id:3, message:'Yo!'},
{id:4, message:'Hello'},
{id:5, message:'H!'},
{id:6, message:'%)'},
{id:7, message:'***'}
]
	return (
	<div className={classes.dialogs}> 
		<div className={classes.dialogsItems}> 
			<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
			<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
			<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
			<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
			<DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
			<DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
			<DialogItem name={dialogsData[6].name} id={dialogsData[6].id}/>
		</div>

		<div className={classes.messages}> 
			<Messages message={messagesData[0].message} id={messagesData[0].id}/>
			<Messages message={messagesData[1].message} id={messagesData[1].id}/>
			<Messages message={messagesData[2].message} id={messagesData[2].id}/>
			<Messages message={messagesData[3].message} id={messagesData[3].id}/>
			<Messages message={messagesData[4].message} id={messagesData[4].id}/>
			<Messages message={messagesData[5].message} id={messagesData[5].id}/>
			<Messages message={messagesData[6].message} id={messagesData[6].id}/>
    	</div>
	</div>
	);
}

export default Dialogs;