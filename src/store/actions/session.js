import axios from "axios";
import { LOG_IN, LOG_OUT } from "../constants";

export const logOut = () => ({
  type: LOG_OUT
});

export const logIn = credentials => ({
  type: LOG_IN,
  credentials
});

/**
 * Logout from backend, dispatch logOut action
 */
export const sessionLogOut = () => dispatch => {
  axios
    .get("/api/session/logout")
    .then(res => res.data)
    .then(() => dispatch(logOut()));
};

export const fetchSession = () => dispatch =>
  axios
    .get("/api/me")
    .then(res => res.data)
    .then(user => dispatch(logIn(user)));

export const sessionLogIn = (url, email, password) => dispatch =>
  axios
    .post(url, { email, password })
    .then(res => {
      const { fullName, email, type, id, auth, token } = res.data;
      return { fullName, email, type, id, auth, token };
    })
    .then(user => dispatch(logIn(user)))
    .catch(err => console.log(err));
