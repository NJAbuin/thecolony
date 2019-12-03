import { FETCH_CLIENTS } from "../constants";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CLIENTS:
            return [...action.payload]

        default:
            return state;
    }
};
