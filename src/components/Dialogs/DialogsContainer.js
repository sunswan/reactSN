import Dialogs from "./Dialogs"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

	let addMessageClick = () => {
		props.store.dispatch(addMessageActionCreator());
	};

	let onMessageChange = (newmessage) => {
		props.store.dispatch(updateNewMessageTextActionCreator(newmessage));
	};


    return <Dialogs
        updateNewMessageBody={onMessageChange}
        addMessage={addMessageClick}
        dialogsPage={state}
    />
}

export default DialogsContainer;
