import { apiUrl } from "../../config/constants";
import axios from "axios";
// import { selectToken, selectUser } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

const getAllCampaignsSuccess = (campaigns) => {
  return {
    type: "ALL_CAMPAIGNS_SUCCESS",
    payload: campaigns,
  };
};

const getSingleCampaignSuccess = (campaign) => {
  return {
    type: "SINGLE_CAMPAIGN_SUCCESS",
    payload: campaign,
  };
};

export const getAllCampaigns = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/campaigns`);

      // token is still valid
      dispatch(getAllCampaignsSuccess(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      // console.log(error.response.message);

      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(appDoneLoading());
    }
  };
};

export const getSingleCampaign = (campaignId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/campaigns/${campaignId}`);

      // token is still valid
      dispatch(getSingleCampaignSuccess(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      // console.log(error.response.message);

      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(appDoneLoading());
    }
  };
};
