import { LOG_IN } from "../constants";

const initialState = {};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...action.payload };
    default:
      return state;
  }
}
