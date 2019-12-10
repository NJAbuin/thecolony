import { SELECT_CLIENT } from "../constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CLIENT:
      return { ...action.payload };

    default:
      return state;
  }
};
