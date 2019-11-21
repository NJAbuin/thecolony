import { LOGIN_ADMIN } from "../constants";

const initialState = { user: {} };

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ADMIN:
      return { state, user: action.payload };
    default:
      return state;
  }
}
