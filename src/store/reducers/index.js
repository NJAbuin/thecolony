import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";

const reducers = { session: sessionReducer };

export default combineReducers(reducers);

// import sessionReducer from "./sessionReducer";

// export default combineReducers({
//   sessionState: sessionReducer
// });
