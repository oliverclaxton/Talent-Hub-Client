import { Link, useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampaignCard from "../../components/CampaignCard/CampaignCard";
import { getAllCampaigns } from "../../store/campaigns/actions";
import { selectAllCampaigns } from "../../store/campaigns/selectors";
import { Button } from "@material-ui/core";
import { selectToken, selectUser } from "../../store/user/selectors";
import { selectSingleTalent } from "../../store/talents/selectors";
import { getSingleTalent } from "../../store/talents/actions";
import MyCampaignCard from "../../components/MyCampaignCard/MyCampaignCard";
import { CardColumns } from "react-bootstrap";

const MyCampaigns = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //   const isLoading = useSelector(selectAppLoading);

  const token = useSelector(selectToken);
  const userLoggedIn = useSelector(selectUser);
  const myCampaigns = useSelector(selectSingleTalent);
  const talentId = userLoggedIn.id;
  console.log(" i am my user loggeding in", talentId);
  console.log(" i am my campinds in", myCampaigns.campaigns);

  if (!token) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getSingleTalent(talentId));
  }, [talentId]);

  if (!myCampaigns.campaigns) return <h1>loading</h1>;

  return (
    <CardColumns>
      {myCampaigns.campaigns.map((c) => {
        // console.log("i am mycampaings mapped", c);
        return (
          <div className="all__talents">
            <MyCampaignCard
              key={c.id}
              title={c.title}
              description={c.description}
              id={c.id}
            />
          </div>
        );
      })}
    </CardColumns>
  );
};

export default MyCampaigns;
