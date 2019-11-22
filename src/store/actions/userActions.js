import { LOG_IN } from "../constants";

export const loginUserAction = credentials => ({
  type: LOG_IN,
  credentials
});

export const loginUser = (email, password) => dispatch => {
  axios
    .post("/api/admin/login", { email, password })
    .then(res => res.data)
    .then(credentials => dispatch(loginUserAction(credentials)))
    .catch(err => console.error(err));
};
