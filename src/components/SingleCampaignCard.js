import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

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

  //   switch (props.statusId) {
  //     case 1:
  //       return setStatusColor("green");
  //       break;
  //     case 2:
  //       return setStatusColor("orange");
  //       break;

  //     default:
  //       setStatusColor("red");
  //       break;
  //   }

  //   if (props.statusId === 1) {
  //     setStatusColor("green");
  //   } else if (props.statusId === 2) {
  //     setStatusColor("orange");
  //   } else {
  //     setStatusColor("red");
  //   }

  console.log("i am props", props);
  if (!props.talents) {
    return <h1>Loading</h1>;
  }

  return (
    // <div>h1</div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography
            className={classes.font}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {props.title}
          </Typography>
          <Typography
            className={classes.font}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Description: {props.description}
          </Typography>
          <Typography
            className={classes.font}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            date to go live: {props.dueDate}
          </Typography>
          <Typography
            className={classes.font}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Status: {statusColor}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
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
      </CardActions>
      <CardActions>
        {props.campaignImages.map((ci) => {
          console.log("i am CICIC", ci);
          return (
            <div key={ci.id}>
              <CardMedia className={classes.media} image={ci.imageUrl} />
              <p>{ci.caption}</p>
            </div>
          );
        })}
      </CardActions>
    </Card>
  );
};

export default SingleCampaignCard;
