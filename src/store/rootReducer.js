import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import talents from "./talents/reducer";
import campaigns from "./campaigns/reducer";

export default combineReducers({
  appState,
  user,
  talents,
  campaigns,
});
