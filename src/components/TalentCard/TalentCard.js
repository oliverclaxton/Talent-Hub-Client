import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Card } from "react-bootstrap";

export default function TalentCard(props) {
  const fullName = `${props.firstName} ${props.lastName}`;

  return (
    <Card className="talent__card">
      <Card.Img variant="top" src={props.profileImageUrl} />
      <Card.Body>
        <Card.Title>
          <h3>{fullName}</h3>
        </Card.Title>
        <Link to={`/talents/${props.id}`}>
          <Button variant="primary">See Campaigns</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
