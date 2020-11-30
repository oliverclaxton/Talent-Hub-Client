import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "@material-ui/core";
import "./CampaignCard.css";

const CampaignCard = (props) => {
  // console.log("i am props", props);
  if (!props) {
    return <h1>Loading</h1>;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Header>
          <h1>{props.title}</h1>
        </Card.Header>
        <Card.Text>
          <p>{props.description}</p>
        </Card.Text>
      </Card.Body>
      <Link to={`/campaigns/${props.id}`}>
        <Button variant="primary">See Campaign</Button>
      </Link>
    </Card>
  );
};

export default CampaignCard;
