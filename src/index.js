import state from "./redux/state";
import reportWebVitals from "./reportWebVitals";
import { rerenderEntireTree } from "./render";

rerenderEntireTree(state);

reportWebVitals();
