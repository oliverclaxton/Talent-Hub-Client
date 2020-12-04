import { Link, useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampaignCard from "../../components/CampaignCard/CampaignCard";
import { getAllCampaigns } from "../../store/campaigns/actions";
import { selectAllCampaigns } from "../../store/campaigns/selectors";
import { Button } from "@material-ui/core";
import { selectToken } from "../../store/user/selectors";

import { CardColumns } from "react-bootstrap";

const AllCampaigns = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //   const isLoading = useSelector(selectAppLoading);
  const allCampaigns = useSelector(selectAllCampaigns);
  // console.log("i am all campaigns", allCampaigns);

  const token = useSelector(selectToken);

  if (!token) {
    history.push("/login");
  }

  useEffect(() => {
    dispatch(getAllCampaigns());
  }, [dispatch]);
  return (
    <div>
      <CardColumns>
        {allCampaigns.map((c) => (
          <CampaignCard
            key={c.id}
            title={c.title}
            description={c.description}
            talents={c.users}
            id={c.id}
            status={c.statusId}
          />
        ))}
      </CardColumns>
      <div className="__button">
        <Link to={"/addCampaign"}>
          <Button variant="contained">Add Campaign</Button>
        </Link>
      </div>
    </div>
  );
};

export default AllCampaigns;
