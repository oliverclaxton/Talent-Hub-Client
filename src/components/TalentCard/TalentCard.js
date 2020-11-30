import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import "./TalentCard.css";
import { Button, CardActionArea } from "@material-ui/core";
import { Card } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  font: {
    fontFamily: "playfair display",
  },
}));

export default function TalentCard(props) {
  const classes = useStyles();
  const fullName = `${props.firstName} ${props.lastName}`;

  return (
    <div>
      <div>
        <Link to={`/talents/${props.id}`}>
          <Card
            style={{ width: "18rem", marginTop: "20px", marginBottom: "20px" }}
          >
            <Card.Img variant="top" src={props.profileImageUrl} />
            <Card.Body>
              <Card.Title>{fullName}</Card.Title>

              <Button variant="primary">See Campaigns</Button>
            </Card.Body>
          </Card>
        </Link>
      </div>
      {/* <div>
        <Link to={`/talents/${props.id}`}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.profileImageUrl}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  className={classes.font}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {fullName}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </Link>
      </div> */}

      {/* <div className="main">
        <div className="position__border image">
          <Link to={`/talents/${props.id}`}>
            <img src={props.profileImageUrl} alt="profile image" />
          </Link>
          <h1>{fullName}</h1>
        </div>
        <div className="position__border name">
          {/* <h1>{fullName}</h1> */}
      {/* <h6>{props.email}</h6> */}
      {/* </div> */}
      {/* <div className="position__border">
        <Link to={`/talents/${props.id}`}>Learn More</Link>
      </div> */}
      {/* </div> */}
    </div>
  );
}
