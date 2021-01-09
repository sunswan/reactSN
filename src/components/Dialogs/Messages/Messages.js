import React from "react";
import classes from "./../Dialogs.module.css";

const Messages = (props) => {
  return (
    <div>
      <div className={classes.message}>{props.message}</div>
    </div>
  );
};

export default Messages;
