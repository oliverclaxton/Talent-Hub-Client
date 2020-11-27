import { Link, useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampaignCard from "../../components/CampaignCard/CampaignCard";
import { getAllCampaigns } from "../../store/campaigns/actions";
import { selectAllCampaigns } from "../../store/campaigns/selectors";
import { Button } from "@material-ui/core";
import { selectToken } from "../../store/user/selectors";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const AllCampaigns = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  //   const isLoading = useSelector(selectAppLoading);
  const allCampaigns = useSelector(selectAllCampaigns);
  //   console.log("i am all campaigns", allCampaigns);

  const token = useSelector(selectToken);

  if (!token) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getAllCampaigns());
  }, [dispatch]);
  return (
    <div>
      <div>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {allCampaigns.map((c) => (
              <GridListTile key={c.id}>
                <CampaignCard
                  title={c.title}
                  description={c.description}
                  talents={c.users}
                  id={c.id}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
      {/* <div>
        {allCampaigns.map((c) => {
          //   console.log("i am campaings mapped", c);
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
      </div> */}
      <Link to={"/addCampaign"}>
        <Button variant="contained">Add Campaign</Button>
      </Link>
    </div>
  );
};

export default AllCampaigns;
