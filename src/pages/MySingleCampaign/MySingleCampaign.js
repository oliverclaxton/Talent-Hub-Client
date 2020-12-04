import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleCampaign } from "../../store/campaigns/selectors";
import { getSingleCampaign } from "../../store/campaigns/actions";
import MySingleCampaignCard from "../../components/MySingleCampaignCard/MySingleCampaignCard";

import "./MySingleCampaign.css";
import { selectToken } from "../../store/user/selectors";

const MySingleCampaign = () => {
  const params = useParams();
  const history = useHistory();
  const token = useSelector(selectToken);

  // console.log("what is params??", params.campaignId);
  if (!token) {
    history.push("/login");
  }
  const campaignId = params.campaignId;

  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectAppLoading);
  const singleCampaign = useSelector(selectSingleCampaign);
  // console.log("i the single Campaign", singleCampaign);

  useEffect(() => {
    dispatch(getSingleCampaign(campaignId));
  }, [dispatch, campaignId]);

  return (
    <div>
      <MySingleCampaignCard
        title={singleCampaign.title}
        description={singleCampaign.description}
        briefLink={singleCampaign.briefLink}
        contractLink={singleCampaign.contractLink}
        talents={singleCampaign.users}
        dueDate={singleCampaign.dueDate}
        statusId={singleCampaign.statusId}
        campaignImages={singleCampaign.campaignImages}
        id={singleCampaign.id}
      />
    </div>
  );
};

export default MySingleCampaign;
