import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Card, CardColumns } from "react-bootstrap";
import "../../index.css";

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
    <div style={{ display: "flex" }}>
      <CardColumns>
        <Card>
          <Card.Img variant="top" src={props.profileImageUrl} />
          <Card.Body>
            <Card.Title>
              <h4>{fullName}</h4>
            </Card.Title>
            <Card.Text>{props.email}</Card.Text>
          </Card.Body>
        </Card>

        <div className="talent__info">
          <h2 style={{ paddingBottom: 12 }}>Current Campaigns</h2>
          {props.campaigns.length === 0
            ? noCampaingsMessage
            : props.campaigns.map((c) => {
                return (
                  <ul style={{ paddingLeft: 0, marginBottom: 8 }} key={c.id}>
                    <Link to={`/campaigns/${c.id}`}>
                      <Button style={{ fontSize: "1rem" }}>{c.title}</Button>
                    </Link>
                  </ul>
                );
              })}
        </div>
        <Link to={"/addCampaign"}>
          <Button style={{ marginTop: 8 }} variant="contained">
            Add Campaign
          </Button>
        </Link>
      </CardColumns>
    </div>
  );
}
