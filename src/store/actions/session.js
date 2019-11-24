import axios from "axios";
import { LOG_IN, LOG_OUT } from "../constants";

export const logOut = () => ({
  type: LOG_OUT
});

export const logIn = credentials => ({
  type: LOG_IN,
  credentials
});

export const fetchUser = () => dispatch =>
  axios
    .get("/api/me")
    .then(res => res.data)
    .then(user => {
      dispatch(logIn(user));
    });

export const sessionLogIn = (url, email, password) => dispatch =>
  axios
    .post(url, { email, password })
    .then(res => {
      console.log(res)
      const { fullName, email, userType } = res.data;
      return { fullName, email, userType };
    })
    .then(user => dispatch(logIn(user)))
    .catch(err => console.log(err));
