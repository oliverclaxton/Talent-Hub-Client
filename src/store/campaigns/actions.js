import { apiUrl } from "../../config/constants";
import axios from "axios";
// import { selectToken, selectUser } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  // setMessage,
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
const addCampaignSuccess = (campaign) => {
  return {
    type: "ADD_CAMPAIGN_SUCCESS",
    payload: campaign,
  };
};

const campaignDeleteSuccess = (campaignId) => {
  return {
    type: "CAMPAIGN_DELETE_SUCCESS",
    payload: campaignId,
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

export const addCampaign = (
  title,
  description,
  contractLink,
  briefLink,
  date,
  talent
) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const response = await axios.post(`${apiUrl}/campaigns`, {
      title,
      description,
      contractLink,
      briefLink,
      date,
      talent,
    });

    // console.log("Yep!", response.data.campaign);
    dispatch(
      showMessageWithTimeout("success", false, response.data.message, 3000)
    );
    dispatch(addCampaignSuccess(response.data.campaign));
    dispatch(appDoneLoading());
  };
};

export const deleteCampaign = (campaignId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    // make an axios request to delete
    // and console.log the response if success
    try {
      const response = await axios.delete(
        `${apiUrl}/campaigns/${campaignId}`
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );

      // console.log("campaign deleted?", response.data);
      dispatch(campaignDeleteSuccess(campaignId));
      dispatch(appDoneLoading());
    } catch (e) {
      console.error(e);
    }
  };
};

export const addCampaignImage = (imgUrl, userId, campaignId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const response = await axios.post(`${apiUrl}/campaigns/images`, {
      imgUrl,
      userId,
      campaignId,
    });

    // console.log("Yep!", response.data.campaign);
    dispatch(
      showMessageWithTimeout("success", false, response.data.message, 3000)
    );
    dispatch(getSingleCampaign(campaignId));
    // dispatch(addCampaignSuccess(response.data.campaign));
    // dispatch(appDoneLoading());
  };
};

export const addImageCaption = (caption, id, campaignId) => {
  // console.log(" i am campaignId ", caption, id, campaignId);
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const response = await axios.patch(`${apiUrl}/campaigns/images`, {
      caption,
      id,
    });

    // console.log("Yep!", response.data.campaign);
    dispatch(
      showMessageWithTimeout("success", false, response.data.message, 3000)
    );
    dispatch(getSingleCampaign(campaignId));
    // dispatch(addCampaignSuccess(response.data.campaign));
    // dispatch(appDoneLoading());
  };
};

export const setCamapaignStatus = (statusId, campaignId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const response = await axios.patch(`${apiUrl}/campaigns/`, {
      statusId,
      campaignId,
    });

    // console.log("Yep!", response.data.campaign);
    dispatch(
      showMessageWithTimeout("success", false, response.data.message, 3000)
    );
    dispatch(getSingleCampaign(campaignId));
    // dispatch(addCampaignSuccess(response.data.campaign));
    // dispatch(appDoneLoading());
  };
};
