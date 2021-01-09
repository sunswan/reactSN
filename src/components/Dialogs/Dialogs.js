import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.js';
import Messages from './Messages/Messages.js';
import NewMessage from './Messages/NewMessage/NewMessage';


const Dialogs = (props) => {

let dialogsElements = props.dialogsPage.dialogs.map 
(d => <DialogItem name={d.name} />)
let messagesElements = props.dialogsPage.messages.map 
(m => <Messages message={m.message}/>)


	return (
	<div className={classes.dialogs}> 
		<div className={classes.dialogsItems}> 
			{dialogsElements}
		</div>

		<div className={classes.messages}> 
			{messagesElements}
    	</div>

		<NewMessage
		newMessageText={props.dialogsPage.newMessageText} 
		updateNewMessageText={props.updateNewMessageText}
		addMessage={props.addMessage}/>

	</div>
	);
}

export default Dialogs;