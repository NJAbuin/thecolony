import { LOG_IN } from "../constants";

export const loginUserAction = admin => {
  return { type: LOG_IN, payload: admin };
};

export const loginUser = (email, password) => dispatch => {
  axios
    .post("/api/admin/login", { email, password })
    .then(res => res.data)
    .then(() => {
      return dispatch(loginUserAction(admin));
    })
    .catch(console.error());
};
