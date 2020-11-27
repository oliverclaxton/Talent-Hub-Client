import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCampaign } from "../../store/campaigns/actions";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Button } from "@material-ui/core";

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
    color: "white",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const SingleCampaignCard = (props) => {
  const classes = useStyles();

  const [statusColor, setStatusColor] = useState("green");

  const dispatch = useDispatch();
  const history = useHistory();

  const onDelete = (id) => {
    console.log("deleting campaign!", id);

    dispatch(deleteCampaign(id));
    history.push("/campaigns");
  };

  console.log("i am props", props);
  if (!props.talents) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <div>
        <div>
          <h1>{props.title}</h1>
          <h5>{props.description}</h5>
          <h6>Date to go live: {props.dueDate}</h6>
        </div>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {props.campaignImages.map((ci) => (
              <GridListTile key={ci.id}>
                <img src={ci.imageUrl} alt={ci.caption} />
                <GridListTileBar
                  title={ci.caption}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
      <div>
        <div>
          <h5>List of talents on this campaign are : </h5>
          {props.talents.map((t) => {
            // console.log("i am uuuu", t);
            return (
              <div key={t.id}>
                <Link className={classes.font} to={`/talents/${t.id}`}>
                  {t.firstName} {t.lastName}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              onDelete(props.id);
            }}
          >
            Delete this campaign
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleCampaignCard;
