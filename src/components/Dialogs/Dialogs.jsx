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
	return (
	<div className={classes.dialogs}> 
		<div className={classes.dialogsItems}> 
			<DialogItem name='Dima' id='1'/>
			<DialogItem name='Andrey' id='2'/>
			<DialogItem name='Sasha' id='3'/>
			<DialogItem name='Anton' id='4'/>
			<DialogItem name='Sofia' id='5'/>
			<DialogItem name='Victor' id='6'/>
			<DialogItem name='Diana' id='7'/>
		</div>

		<div className={classes.messages}> 
			<Messages message='Hi!' />
			<Messages message='How is your name?' />
			<Messages message='Yo!' />
			<Messages message='Hello' />
			<Messages message='H!' />
			<Messages message='%)' />
			<Messages message='***' />
    	</div>
	</div>
	);
}

export default Dialogs;