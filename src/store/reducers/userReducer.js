import { LOGIN_ADMIN } from "../constants";

const initialState = {};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ADMIN:
      return { ...action.payload };
    default:
      return state;
  }
}
