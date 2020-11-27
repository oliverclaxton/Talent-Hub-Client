import React from "react";
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

const MyCampaignCard = (props) => {
  const classes = useStyles();

  console.log("i am props", props);
  //   if (!props) {
  //     return <h1>Loading</h1>;
  //   }

  return (
    <Link className={classes.font} to={`/myCampaigns/${props.id}`}>
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
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default MyCampaignCard;
