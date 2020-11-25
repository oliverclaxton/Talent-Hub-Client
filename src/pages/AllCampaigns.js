import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampaignCard from "../components/CampaignCard";
import { getAllCampaigns } from "../store/campaigns/actions";
import { selectAllCampaigns } from "../store/campaigns/selectors";

const AllCampaigns = () => {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectAppLoading);
  const allCampaigns = useSelector(selectAllCampaigns);
  console.log("i am all campaigns", allCampaigns);

  useEffect(() => {
    dispatch(getAllCampaigns());
  }, [dispatch]);
  return (
    <div>
      <div>
        {allCampaigns.map((c) => {
          console.log("i am campaings mapped", c);
          return (
            <div key={c.id}>
              <CampaignCard
                title={c.title}
                description={c.description}
                talents={c.users}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCampaigns;
