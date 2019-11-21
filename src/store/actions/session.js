import { LOG_IN, LOG_OUT } from "../constants";

export const logOut = () => ({
  type: LOG_OUT
});

export const logIn = credentials => ({
  type: LOG_IN,
  credentials
});

export const sessionLogIn = (email, password) => dispatch =>
  axios
    .post("/api/admin/login", { email, password })
    .then(res => res.data)
    .then(user => dispatch(logIn(user)))
    .catch(err => console.log(err));
