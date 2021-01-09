import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.js';
import Messages from './Messages/Messages.js';
import NewMessage from './Messages/NewMessage/NewMessage';


const Dialogs = (props) => {

let dialogsElements = props.state.dialogs.map (d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />)
let messagesElements = props.state.messages.map (m => <Messages message={m.message}/>)


	return (
	<div className={classes.dialogs}> 
		<div className={classes.dialogsItems}> 
			{dialogsElements}
		</div>

		<div className={classes.messages}> 
			{messagesElements}
    	</div>

		<NewMessage/>

	</div>
	);
}

export default Dialogs;