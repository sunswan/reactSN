import React from "react";
import classes from "./NewMessage.module.css";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "./../../../../redux/dialogs-reducer";

const NewMessage = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let newmessage = newMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(newmessage)
    props.dispatch(action);
  };

  return (
    <div 
    className={classes.newMessage}>
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
  );
};

export default NewMessage;