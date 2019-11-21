import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const reducers = { user: userReducer };

export default combineReducers(reducers);

// import sessionReducer from "./sessionReducer";

// export default combineReducers({
//   sessionState: sessionReducer
// });
