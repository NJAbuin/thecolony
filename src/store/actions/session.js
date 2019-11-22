import axios from "axios";
import { LOG_IN, LOG_OUT } from "../constants";

export const logOut = () => ({
  type: LOG_OUT
});

export const logIn = credentials => ({
  type: LOG_IN,
  credentials
});

export const sessionLogIn = (url, email, password) => dispatch =>
  axios
    .post(url, { email, password })
    .then(res => {
      const { fullName, email } = res.data;
      return { fullName, email };
    })
    .then(user => dispatch(logIn(user)))
    .catch(err => console.log(err));
