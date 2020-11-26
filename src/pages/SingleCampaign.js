import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTalent } from "../store/talents/actions";
import SingleCampaignCard from "../components/SingleCampaignCard";
import { selectSingleCampaign } from "../store/campaigns/selectors";
import { getSingleCampaign } from "../store/campaigns/actions";

const SingleCampaign = () => {
  const params = useParams();

  console.log("what is params??", params.campaignId);

  const campaignId = params.campaignId;

  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectAppLoading);
  const singleCampaign = useSelector(selectSingleCampaign);
  console.log("i the single Campaign", singleCampaign);

  useEffect(() => {
    dispatch(getSingleCampaign(campaignId));
  }, [dispatch]);

  return (
    <div>
      <div>
        <SingleCampaignCard
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
    </div>
  );
};

export default SingleCampaign;
