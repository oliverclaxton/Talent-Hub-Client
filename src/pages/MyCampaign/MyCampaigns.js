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

const MyCampaigns = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //   const isLoading = useSelector(selectAppLoading);
  //   const allCampaigns = useSelector(selectAllCampaigns);
  //   console.log("i am all campaigns", allCampaigns);

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
    // console.log("idljknfaljksnfdkljsfdnklfjnklsjnkfljnskld");
    dispatch(getSingleTalent(talentId));
  }, [talentId]);

  if (!myCampaigns.campaigns) return <h1>loading</h1>;

  //   const campaignsToFilter = allCampaigns.filter((ac) => {
  //     console.log(" im ac acnskjfhlkjfh", ac);
  //   });

  //   useEffect(() => {
  //     dispatch(getAllCampaigns());
  //   }, [dispatch]);
  return (
    <div>
      <div>
        {myCampaigns.campaigns.map((c) => {
          console.log("i am mycampaings mapped", c);
          return (
            <div key={c.id}>
              <MyCampaignCard
                title={c.title}
                description={c.description}
                id={c.id}
              />
            </div>
          );
        })}
      </div>
      {/* <Link to={"/addCampaign"}>
        <Button variant="contained">Add Campaign</Button>
      </Link> */}
    </div>
  );
};

export default MyCampaigns;
