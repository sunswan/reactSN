import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from'./components/Profile/Profile';
import Dialogs from'./components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {

  return (
  	<BrowserRouter>
		<div className='app-wrapper'>
  			<Header/>
			<Nav/>
		<div className='app-wrapper-content'> 
			<Route exact path="/dialogs" 
			render={() => <Dialogs state={props.state.dialogsPage}/>} />
			<Route path="/profile" 
			render={() => <Profile state={props.state.profilePage}/>} />

		</div>
		</div>
	</BrowserRouter>

);
}




export default App;
