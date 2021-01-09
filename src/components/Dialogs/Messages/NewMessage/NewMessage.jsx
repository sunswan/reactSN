import React from "react";
import classes from "./NewMessage.module.css";

const NewMessage = () => { 

    let newMessageElement = React.createRef();

    let addMessage = () => {
      let text = newMessageElement.current.value;
      alert(text);
    };

  return (
    <div className={classes.newMessage}>
      <textarea ref={newMessageElement} className={classes.messageForm}></textarea>
      <div>
        <button onClick={addMessage} className={classes.messageButton}>
          Add message
        </button>
      </div>
    </div>
  );
}

export default NewMessage;
