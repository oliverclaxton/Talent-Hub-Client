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

const CampaignCard = (props) => {
  const classes = useStyles();

  console.log("i am props", props);
  if (!props) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="main">
      <Link className={classes.font} to={`/campaigns/${props.id}`}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.font} variant="h5" component="h1">
              {props.title}
            </Typography>
            <Typography
              className={(classes.title, classes.font)}
              color="textSecondary"
              gutterBottom
            >
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">See Campaing Deatials </Button>
          </CardActions>
        </Card>
      </Link>
    </div>
  );
};

export default CampaignCard;
