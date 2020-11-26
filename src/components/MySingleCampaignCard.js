import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCampaign } from "../store/campaigns/actions";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";

import ImageUploader from "./ImageUploader";

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

const MySingleCampaignCard = (props) => {
  const classes = useStyles();

  const [statusColor, setStatusColor] = useState("green");
  const [caption, setCaption] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const onDelete = (id) => {
    console.log("deleting campaign!", id);

    dispatch(deleteCampaign(id));
    history.push("/campaigns");
  };

  console.log("i am proppppspsppspspsps", props);
  if (!props.campaignImages) {
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

      <ImageUploader />
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5"></h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            value={caption}
            onChange={(event) => setCaption(event.target.value)}
            type="text"
            placeholder="Enter caption"
            required
          />
        </Form.Group>
      </Form>
    </Card>
  );
};

export default MySingleCampaignCard;
