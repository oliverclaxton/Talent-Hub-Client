import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import {
  addImageCaption,
  setCamapaignStatus,
} from "../../store/campaigns/actions";
import Form from "react-bootstrap/Form";
import { Card, Col, CardColumns } from "react-bootstrap";
import ImageUploader from "../ImageUploaders/ImageUploader";
import "../../index.css";

const MySingleCampaignCard = (props) => {
  const dispatch = useDispatch();

  const [caption, setCaption] = useState("");
  const [imageId, setImageId] = useState("");
  const [status, setStatus] = useState(0);

  console.log(status);

  const campaignId = props.id;

  function submitForm(event, id, campaignId) {
    event.preventDefault();
    dispatch(addImageCaption(caption, id, campaignId));
  }

  function statusHandler(statusId, cid) {
    console.log("i am stauts id when button is clicked", statusId);
    dispatch(setCamapaignStatus(statusId, cid));
  }

  if (!props.campaignImages) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <div className="campaign__info">
        <div>
          <h1>{props.title}</h1>
        </div>
        <div>
          <h4 className="campaign__description">{props.description}</h4>
        </div>
        <div>
          <h6 className="campaign__date">Date to go live: {props.dueDate}</h6>
        </div>
      </div>
      <div className="campaign__status">
        <Form.Control
          as="select"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          required
        >
          <option value={0}>Select Status</option>
          <option value={1}>Complete</option>
          <option value={2}>In Progress</option>
          <option value={3}>Approved</option>
        </Form.Control>
        <Button
          style={{ marginBottom: 20 }}
          onClick={() => {
            statusHandler(status, campaignId);
          }}
        >
          Set Status
        </Button>
      </div>

      <CardColumns>
        {props.campaignImages.map((ci) => {
          return (
            <Card key={ci.id}>
              <Card.Img src={ci.imageUrl} />
              <Card.Body>
                <Card.Title>
                  <h3>Caption</h3>
                </Card.Title>
                <Card.Text>{ci.caption}</Card.Text>
                {!ci.caption ? (
                  <Form as={Col}>
                    <Form.Group>
                      <Form.Control
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
                ) : null}
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>

      <div className="__button">
        <ImageUploader campaignId={props.id} />
      </div>
    </div>
  );
};

export default MySingleCampaignCard;
