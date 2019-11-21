import { LOGIN_ADMIN } from "../constants";

export const loginUserAction = admin => {
  return { type: LOGIN_ADMIN, payload: admin };
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
