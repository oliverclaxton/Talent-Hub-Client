import { apiUrl } from "../../config/constants";
import axios from "axios";
// import { selectToken, selectUser } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

const getAllTalentsSuccess = (talents) => {
  return {
    type: "ALL_TALENTS_SUCCESS",
    payload: talents,
  };
};

const getSingleTalentSuccess = (talent) => {
  return {
    type: "SINGLE_TALENTS_SUCCESS",
    payload: talent,
  };
};

export const getAllTalents = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/talents`);

      // token is still valid
      dispatch(getAllTalentsSuccess(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      // console.log(error.response.message);

      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(appDoneLoading());
    }
  };
};

export const getSingleTalent = (talentId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/talents/${talentId}`);

      // token is still valid
      dispatch(getSingleTalentSuccess(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      // console.log(error.response.message);

      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(appDoneLoading());
    }
  };
};
