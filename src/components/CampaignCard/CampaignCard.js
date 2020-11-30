import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const CampaignCard = (props) => {
  console.log("i am props", props);
  if (!props) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <Link to={`/campaigns/${props.id}`}>
        <Card
          style={{
            width: "18rem",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          {/* <Card.Img variant="top" src={props.profileImageUrl} /> */}
          <Card.Body>
            <Card.Title> {props.title}</Card.Title>
            <Card.Text> {props.description}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default CampaignCard;
