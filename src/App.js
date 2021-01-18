import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
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
          render={() => (
            <DialogsContainer
              store={props.store}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              store={props.store} />
          )}
        />
        <Route path="/friends" render={() => <Friends />} />
      </div>
    </div>
  );
};

export default App;
