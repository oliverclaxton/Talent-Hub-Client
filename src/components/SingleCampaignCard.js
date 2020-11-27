import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCampaign } from "../store/campaigns/actions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  font: {
    fontFamily: "playfair display",
  },
});

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
        <div>
          <h5>List of talents on this campaign are : </h5>
          {props.talents.map((t) => {
            console.log("i am uuuu", t);
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
          {props.campaignImages.map((ci) => {
            //   console.log("i am CICIC", ci);
            return (
              <div key={ci.id}>
                {/* <p>image number : {ci.id}</p> */}
                <img src={ci.imageUrl} alt="image" />
                <p>Caption: {ci.caption}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleCampaignCard;
