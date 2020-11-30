import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./SingleTalentCard.css";

export default function SingleTalentCard(props) {
  // console.log(" i am props,", props);

  if (!props.campaigns) {
    return <h1>Loading</h1>;
  }

  const fullName = `${props.firstName} ${props.lastName}`;
  const noCampaingsMessage = (
    <div>
      <p>No current Campigns</p>
    </div>
  );

  return (
    <div>
      <div className="single__talent">
        <Card className="single__talent">
          <Card.Img variant="top" src={props.profileImageUrl} />
          <Card.Body>
            <Card.Title>
              <h4>{fullName}</h4>
            </Card.Title>
            <Card.Text>{props.email}</Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="info">
        <h1>Current campaigns</h1>
        {props.campaigns.length === 0
          ? noCampaingsMessage
          : props.campaigns.map((c) => {
              return (
                <ul key={c.id}>
                  <Link to={`/campaigns/${c.id}`}>
                    <li>{c.title}</li>
                  </Link>
                </ul>
              );
            })}
      </div>
      <div className="__button">
        <Link to={"/addCampaign"}>
          <Button variant="contained">Add Campaign</Button>
        </Link>
      </div>
    </div>
  );
}
