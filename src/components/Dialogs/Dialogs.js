import React from "react";
import DialogItem from './DialogItem/DialogItem.js';
import classes from './Dialogs.module.css';
import Messages from './Messages/Messages.js';


const Dialogs = (props) => {

	let newMessageElement = React.createRef();
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map
		(d => <DialogItem name={d.name} />)
	let messagesElements = state.messages.map
		(m => <Messages message={m.message} />)

	let addMessage = () => {
		props.addMessage()
	}

	let onMessageChange = (e) => {
		let newmessage = e.target.value;
		props.updateNewMessageBody(newmessage);
	}

	return (
		<div>
			<div className={classes.dialogs}>
				<div className={classes.dialogsItems}>
					{dialogsElements}
				</div>
			</div>
			<div className={classes.messages}>
			{messagesElements}
			</div>

			<div className={classes.newMessage}>
				<textarea
					onChange={onMessageChange}
					ref={newMessageElement}
					className={classes.messageForm}
					value={props.newMessageText}
				/>
				<div>
					<button
						onClick={addMessage}
						className={classes.messageButton}>
						Add message
				  </button>
				</div>
			</div>
		</div>
	);
};



export default Dialogs;