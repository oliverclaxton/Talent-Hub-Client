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
import { deleteCampaignImage } from "../../store/campaigns/actions";

const MySingleCampaignCard = (props) => {
  const dispatch = useDispatch();

  const [caption, setCaption] = useState("");
  // const [imageId, setImageId] = useState("");
  const [status, setStatus] = useState(0);
  const [editMode, setEditMode] = useState(false);

  // console.log(status);

  const campaignId = props.id;

  function submitForm(event, id, campaignId) {
    event.preventDefault();
    setEditMode(false);
    dispatch(addImageCaption(caption, id, campaignId));
  }

  function statusHandler(statusId, cid) {
    // console.log("i am stauts id when button is clicked", statusId);
    dispatch(setCamapaignStatus(statusId, cid));
  }

  if (!props.campaignImages) {
    return <h1>Loading</h1>;
  }

  // console.log("date is!!", props.dueDate);

  const dateFirst = props.dueDate.slice(8, 10);
  // console.log("date first", dateFirst);
  const dateMiddle = props.dueDate.slice(5, 7);
  // console.log("date middle", dateMiddle);
  const dateLast = props.dueDate.slice(0, 2);
  // console.log("date last", dateLast);
  const newDate = `${dateFirst}/${dateMiddle}/${dateLast}`;

  // console.log("i am date", newDate);

  let statusOfCampaign;

  switch (props.statusId) {
    case 1:
      statusOfCampaign = <span>Complete</span>;

      break;
    case 2:
      statusOfCampaign = <span>In progress</span>;

      break;
    case 3:
      statusOfCampaign = <span>Approved</span>;

      break;

    default:
      break;
  }

  const onImageDelete = (id) => {
    console.log("deleting image!", id);

    dispatch(deleteCampaignImage(id));
  };

  return !editMode ? (
    <div>
      <div>
        <div>
          <h1>{props.title}</h1>
          <hr />
        </div>
        <div>
          <h4 className="campaign__description">{props.description}</h4>
          <hr />
        </div>
        <div className="campaign__date">
          <a href={props.contractLink}>
            <Button>Contract</Button>
          </a>
        </div>
        <div>
          <a href={props.briefLink}>
            <Button>Brief</Button>
          </a>
        </div>
        <div>
          <h6 className="campaign__date">Date to go live: {newDate}</h6>
          <hr />
        </div>
        <h6>
          Status:{" "}
          <span style={{ textDecoration: "underline" }}>
            {statusOfCampaign}
          </span>
        </h6>
      </div>

      <div>
        <Form.Control
          as="select"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          required
        >
          <option value={0}>Set Status</option>
          <option value={1}>Complete</option>
          <option value={2}>In Progress</option>
          <option value={3}>Approved</option>
        </Form.Control>
        <Button
          variant="contained"
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
                <hr />
                <Card.Text>{ci.caption}</Card.Text>
                <hr />
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
                ) : (
                  <Card.Text>
                    <Button
                      onClick={() => {
                        setEditMode(true);
                      }}
                    >
                      Edit
                    </Button>
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>

      <div className="__button">
        <ImageUploader campaignId={props.id} />
      </div>
    </div>
  ) : (
    <div>
      <div>
        <div>
          <h1>{props.title}</h1>
          <hr />
        </div>
        <div>
          <h4 className="campaign__description">{props.description}</h4>
          <hr />
        </div>
        <div className="campaign__date">
          <a href={props.contractLink}>
            <Button>Contract</Button>
          </a>
        </div>
        <div>
          <a href={props.briefLink}>
            <Button>Brief</Button>
          </a>
        </div>
        <div>
          <h6 className="campaign__date">Date to go live: {newDate}</h6>
          <hr />
        </div>
        <h6>
          Status:{" "}
          <span style={{ textDecoration: "underline" }}>
            {statusOfCampaign}
          </span>
        </h6>
      </div>

      <div>
        <Form.Control
          as="select"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          required
        >
          <option value={0}>Set Status</option>
          <option value={1}>Complete</option>
          <option value={2}>In Progress</option>
          <option value={3}>Approved</option>
        </Form.Control>
        <Button
          variant="contained"
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
                <hr />
                <Card.Text>{ci.caption}</Card.Text>
                <hr />
                {ci.caption ? (
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
                      type="submit"
                      onClick={(e) => {
                        submitForm(e, ci.id, campaignId);
                      }}
                    >
                      Update Caption
                    </Button>
                    <Button
                      onClick={() => {
                        onImageDelete(ci.id);
                      }}
                    >
                      | Delete Image |
                    </Button>
                    <Button
                      onClick={() => {
                        setEditMode(false);
                      }}
                    >
                      Close
                    </Button>
                  </Form>
                ) : (
                  <Card.Text>
                    <Button
                      onClick={() => {
                        setEditMode(true);
                      }}
                    >
                      Edit Caption
                    </Button>
                  </Card.Text>
                )}
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
