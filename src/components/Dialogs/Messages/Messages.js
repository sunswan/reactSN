import classes from './../Dialogs.module.css'


const Messages = (props) => {
	return 	<div className={classes.message}>{props.message}</div>	
}


export default Messages;
