import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Card, Col, Container } from "react-bootstrap";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
  },
  media: {
    height: 300,
  },
  font: {
    fontFamily: "playfair display",
  },
});

export default function SingleTalentCard(props) {
  console.log(" i am props,", props.campaigns);
  const classes = useStyles();

  if (!props.campaigns) {
    return <h1>Loading</h1>;
  }
  props.campaigns.map((c) => {
    console.log("i am c", c);
  });
  const fullName = `${props.firstName} ${props.lastName}`;
  const noCampaingsMessage = (
    <div>
      <p>No current Campigns</p>
    </div>
  );

  return (
    <div>
      {/* <Card className={classes.root}>
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
      </Card> */}

      <div>
        <Container>
          <Col>
            <Card
              style={{
                width: "18rem",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <Card.Img variant="top" src={props.profileImageUrl} />
              <Card.Body>
                <Card.Title>{fullName}</Card.Title>
                <Card.Text>{props.email}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>

      <div className="container">
        <h1>Current campaigns</h1>
        {props.campaigns.length === 0
          ? noCampaingsMessage
          : props.campaigns.map((c) => {
              return (
                <ul key={c.id}>
                  <Link className={classes.font} to={`/campaigns/${c.id}`}>
                    <li>{c.title}</li>
                  </Link>
                </ul>
              );
            })}
        <Link to={"/addCampaign"}>
          <Button variant="contained">Add Campaign</Button>
        </Link>
      </div>
    </div>
  );
}
