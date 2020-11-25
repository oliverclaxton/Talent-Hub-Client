import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  console.log("what is action.payload?", action.payload);
  switch (action.type) {
    case "ALL_TALENTS_SUCCESS":
      return action.payload;

    default:
      return state;
  }
};
