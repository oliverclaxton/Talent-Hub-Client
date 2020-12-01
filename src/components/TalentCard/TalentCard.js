import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Card } from "react-bootstrap";

export default function TalentCard(props) {
  const fullName = `${props.firstName} ${props.lastName}`;

  return (
    <Card className="talent__card">
      <Link to={`/talents/${props.id}`}>
        <Card.Img variant="top" src={props.profileImageUrl} />
      </Link>
      <Card.Body>
        <Card.Title>
          <h3>{fullName}</h3>
        </Card.Title>
        <Link to={`/talents/${props.id}`}>
          <Button>See Campaigns</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
