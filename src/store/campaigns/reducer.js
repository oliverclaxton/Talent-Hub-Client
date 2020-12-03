const initialState = { all: [], details: {} };

export default (state = initialState, action) => {
  // console.log("what is action.payload?", action.payload);
  switch (action.type) {
    case "ALL_CAMPAIGNS_SUCCESS":
      return { ...state, all: action.payload };
    case "SINGLE_CAMPAIGN_SUCCESS":
      return { ...state, details: action.payload };
    case "ADD_CAMPAIGN_SUCCESS":
      return { ...state, all: [...state.all, action.payload] };
    case "CAMPAIGN_DELETE_SUCCESS":
      const campaignId = action.payload;
      const newCampaigns = state.all.filter(
        (campaign) => campaign.id !== campaignId
      );

      return { ...state, all: newCampaigns };

    case "CAMPAIGN_IMAGE_DELETE_SUCCESS":
      console.log("payload", action.payload);
      console.log("i am state before,", state.details);
      const campaignImageId = action.payload;
      const newCampaignsImages = state.details.campaignImages.filter(
        (campaignImage) => {
          return campaignImage.id !== campaignImageId;
        }
      );

      return {
        ...state,
        details: { ...state.details, campaignImages: newCampaignsImages },
      };

    default:
      return state;
  }
};
