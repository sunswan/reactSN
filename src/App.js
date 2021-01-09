import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route
          exact
          path="/dialogs"
          render={() => 
          <Dialogs 
          state={props.state.dialogsPage} />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />
          )}
        />
        <Route path="/friends" render={() => <Friends />} />
      </div>
    </div>
  );
};

export default App;
