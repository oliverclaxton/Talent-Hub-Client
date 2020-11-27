import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addImageCaption } from "../store/campaigns/actions";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import ImageUploader from "./ImageUploader";

const MySingleCampaignCard = (props) => {
  const dispatch = useDispatch();

  //   const [status, setStatus] = useState(2);
  const [caption, setCaption] = useState("");
  const [imageId, setImageId] = useState("");

  const campaignId = props.id;

  //   console.log("i am stauts", status);
  //   console.log(" i am props.id", props.id);
  //   console.log("i am proppppspsppspspsps", props);
  //   console.log("i am caption with the image id", imageId, caption);

  function submitForm(event, id, campaignId) {
    event.preventDefault();
    dispatch(addImageCaption(caption, id, campaignId));
  }

  if (!props.campaignImages) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <div>
        <h1>{props.title}</h1>
        <h5>{props.description}</h5>
        <h6>Date to go live: {props.dueDate}</h6>
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
