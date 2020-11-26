import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampaignCard from "../components/CampaignCard";
import { getAllCampaigns } from "../store/campaigns/actions";
import { selectAllCampaigns } from "../store/campaigns/selectors";
import { Button } from "@material-ui/core";

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
                id={c.id}
              />
            </div>
          );
        })}
      </div>
      <Link to={"/addCampaign"}>
        <Button variant="contained">Add Campaign</Button>
      </Link>
    </div>
  );
};

export default AllCampaigns;
