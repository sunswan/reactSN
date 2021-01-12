import React from "react";
import classes from "./NewMessage.module.css";

const NewMessage = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch({type: 'ADD-MESSAGE'});
  };

  let onMessageChange = () => {
    let newmessage = newMessageElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newmessage});
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
