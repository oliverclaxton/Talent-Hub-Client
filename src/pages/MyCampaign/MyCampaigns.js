import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  console.log(" i am my campaignsssssss in MyCAMPAIGN", myCampaigns);

  if (!token) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getSingleTalent(talentId));
  }, [dispatch, talentId]);

  if (!myCampaigns.campaigns) return <h1>loading</h1>;

  return (
    <CardColumns>
      {myCampaigns.campaigns.map((c) => {
        console.log("i am mycampaings mapped", c);
        return (
          <div key={c.id} className="all__talents">
            <MyCampaignCard
              title={c.title}
              description={c.description}
              id={c.id}
              status={c.statusId}
            />
          </div>
        );
      })}
    </CardColumns>
  );
};

export default MyCampaigns;
