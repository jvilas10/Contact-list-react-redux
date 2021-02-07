import { createStore } from "redux";
import { composeWithDevTool, composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools())
export default store;

// const store = createStore(contactReducer, composeWithDevTool());
// export default store;