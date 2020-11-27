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
import { addImageCaption } from "../store/campaigns/actions";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";

import ImageUploader from "./ImageUploader";

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 300,
  },
  font: {
    fontFamily: "playfair display",
  },
});

const MySingleCampaignCard = (props) => {
  const classes = useStyles();

  const [status, setStatus] = useState(2);
  const [caption, setCaption] = useState("");
  const [imageId, setImageId] = useState("");

  console.log("i am stauts", status);

  const campaignId = props.id;

  console.log(" i am props.id", props.id);

  const dispatch = useDispatch();
  const history = useHistory();

  function submitForm(event, id, campaignId) {
    event.preventDefault();
    console.log(" i am image id", id);

    dispatch(addImageCaption(caption, id, campaignId));
  }

  let statusText = "";

  //   if (status == 2) {
  //     statusText = "In Progress";
  //   } else if (status == 1) {
  //     statusText = "Complete";
  //   } else {
  //     return;
  //   }

  console.log("i am proppppspsppspspsps", props);
  if (!props.campaignImages) {
    return <h1>Loading</h1>;
  }

  console.log("i am caption with the image id", imageId, caption);

  return (
    <div>
      <div>
        <h1>{props.title}</h1>
        <h5>{props.description}</h5>
        {/* <h5>Current Status : {statusText}</h5> */}
        <h6>Date to go live: {props.dueDate}</h6>
        {/* <select onChange={(event) => setStatus(event.target.value)}>
          <option>Mark as Complete</option>
          <option value={1}>Complete</option>
          <option value={2}>In Progress</option>
        </select> */}
        <ImageUploader campaignId={props.id} />
      </div>

      <div>
        {props.campaignImages.map((ci) => {
          //   console.log("i am CICIC", ci);
          return (
            <div key={ci.id}>
              {/* <p>image number : {ci.id}</p> */}
              <img src={ci.imageUrl} alt="image" />

              {!ci.caption ? (
                <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
                  <h1 className="mt-5 mb-5"></h1>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      //   value={caption}
                      onChange={(event) => setCaption(event.target.value)}
                      type="text"
                      placeholder="Enter caption"
                      as="textarea"
                      rows={3}
                      required
                    />
                  </Form.Group>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={(e) => {
                      submitForm(e, ci.id, campaignId);
                    }}
                  >
                    Add Caption
                  </Button>
                </Form>
              ) : (
                <div>
                  <p>Caption : {ci.caption}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* <div>
        <Form.Control
          as="select"
          value={imageId}
          onChange={(event) => setImageId(event.target.value)}
          required
        >
          <option value="">Select Image to add caption</option>
          {props.campaignImages.map((ci) => {
            //   console.log("i am HELLOOOO", ci);
            return (
              <option key={ci.id} value={ci.id}>
                {ci.id}
              </option>
            );
          })}
        </Form.Control>
      </div> */}

      {/* <div>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h1 className="mt-5 mb-5"></h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              value={caption}
              onChange={(event) => setCaption(event.target.value)}
              type="text"
              placeholder="Enter caption"
              as="textarea"
              rows={3}
              required
            />
          </Form.Group>
          <Button variant="contained" type="submit" onClick={submitForm}>
            Add Caption
          </Button>
        </Form>
      </div> */}
    </div>
  );
};

export default MySingleCampaignCard;
