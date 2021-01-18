import { combineReducers, createStore } from "redux";

import dialogsReduser  from "./dialogs-reducer";
import profileReduser  from "./profile-reducer";
import sidebarReduser  from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReduser, 
    dialogsPage: dialogsReduser, 
    sidebarPage: sidebarReduser
});

let store = createStore (reducers); 

export default store