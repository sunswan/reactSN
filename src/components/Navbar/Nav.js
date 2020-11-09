import classes from './Nav.module.css';


function Nav() {
  return (
	<nav className={classes.nav}> 
		<div> <a className={classes.item} href='#'> Profile </a> </div>
		<div> <a className={classes.item} href='#'> Messages </a> </div>
		<div> <a className={classes.item} href='#'> News </a> </div>
		<div> <a className={classes.item} href='#'> Music </a></div>
		<div> <a className={`${classes.item} ${classes.active}`} href='#'> Settings </a></div>
	</nav>
  	);
}

export default Nav;
