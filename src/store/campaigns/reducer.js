import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = { all: [], details: {} };

export default (state = initialState, action) => {
  console.log("what is action.payload?", action.payload);
  switch (action.type) {
    case "ALL_CAMPAIGNS_SUCCESS":
      return { ...state, all: action.payload };
    case "SINGLE_CAMPAIGN_SUCCESS":
      return { ...state, details: action.payload };
    case "ADD_CAMPAIGN_SUCCESS":
      return { ...state, all: [...state.all, action.payload] };

    default:
      return state;
  }
};
