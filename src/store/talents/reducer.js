const initialState = { all: [], details: {} };

export default (state = initialState, action) => {
  // console.log("what is action.payload?", action.payload);
  switch (action.type) {
    case "ALL_TALENTS_SUCCESS":
      return { ...state, all: action.payload };
    case "SINGLE_TALENTS_SUCCESS":
      return { ...state, details: action.payload };

    default:
      return state;
  }
};
