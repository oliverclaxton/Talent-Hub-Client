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
    maxWidth: 1000,
    display: "flex",
    border: "solid",
    justifyContent: "space-around",
    alignItems: "space-around",
    marginTop: 20,
    marinBottom: 20,
    marginLeft: 300,
  },
  media: {
    height: 480,
    width: 800,
    justifyContent: "centre",
  },
  font: {
    fontFamily: "playfair display",
  },
});

export default function TalentCard(props) {
  const classes = useStyles();

  const fullName = `${props.firstName} ${props.lastName}`;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link className={classes.font} to={`/talents/${props.id}`}>
          <CardMedia className={classes.media} image={props.profileImageUrl} />
        </Link>
        <CardContent>
          <Typography
            className={classes.font}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {fullName}
          </Typography>
          <Typography
            className={classes.font}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link className={classes.font} to={`/talents/${props.id}`}>
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
}
