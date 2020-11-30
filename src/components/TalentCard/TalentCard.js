import React from "react";
import { Link } from "react-router-dom";

import "./TalentCard.css";
import { Button } from "@material-ui/core";
import { Card } from "react-bootstrap";

export default function TalentCard(props) {
  const fullName = `${props.firstName} ${props.lastName}`;

  return (
    <div>
      <div>
        <Link to={`/talents/${props.id}`}>
          <Card
            style={{ width: "18rem", marginTop: "20px", marginBottom: "20px" }}
          >
            <Card.Img variant="top" src={props.profileImageUrl} />
            <Card.Body>
              <Card.Title>{fullName}</Card.Title>

              <Button variant="primary">See Campaigns</Button>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </div>
  );
}
