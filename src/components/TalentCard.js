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

export default function TalentCard(props) {
  const classes = useStyles();

  const fullName = `${props.firstName} ${props.lastName}`;

  function clickHandler(id) {
    console.log("i am id of talent clicked", id);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.profileImageUrl} />
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
