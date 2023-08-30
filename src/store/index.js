import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

export default store;
