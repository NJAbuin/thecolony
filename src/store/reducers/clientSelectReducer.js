import { SELECT_CLIENT, EMPTY_CLIENT } from "../constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CLIENT:
      return { ...action.payload };
    case EMPTY_CLIENT:
      return {};
    default:
      return state;
  }
};
