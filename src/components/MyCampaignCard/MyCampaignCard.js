import React from "react";
import { Button } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const MyCampaignCard = (props) => {
  console.log("i am props", props);
  if (!props) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <div>
        <Card className="talent__card">
          <Card.Body>
            <Card.Header>
              <h1>{props.title}</h1>
            </Card.Header>
            <Card.Text>
              <p>{props.description}</p>
            </Card.Text>
          </Card.Body>
          <Link to={`/myCampaigns/${props.id}`}>
            <Button variant="primary">See Campaign</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default MyCampaignCard;
