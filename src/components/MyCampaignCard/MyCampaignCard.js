import React from "react";
import { Button } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const MyCampaignCard = (props) => {
  console.log("i am props", props);
  if (!props) {
    return <h1>Loading</h1>;
  }

  let status;

  switch (props.status) {
    case 1:
      status = <span>Complete</span>;

      break;
    case 2:
      status = <span>In progress</span>;

      break;
    case 3:
      status = <span>Approved</span>;

      break;

    default:
      break;
  }

  return (
    <div>
      <div>
        <Card className="talent__card">
          <Card.Body>
            <Card.Header>
              <h1>{props.title}</h1>
            </Card.Header>
            <Card.Text>{props.description}</Card.Text>
            <hr />
            <h6>
              Status:{" "}
              <span style={{ textDecoration: "underline" }}>{status}</span>
            </h6>
          </Card.Body>
          <Link to={`/myCampaigns/${props.id}`}>
            <Button>See Campaign</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default MyCampaignCard;
