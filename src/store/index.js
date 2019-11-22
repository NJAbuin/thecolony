import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

//const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     trace: true,
//     traceLimit: 25
//   }) || compose;

const composeEnhancers = compose;

const middleWare = [createLogger(), thunkMiddleware];

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);
