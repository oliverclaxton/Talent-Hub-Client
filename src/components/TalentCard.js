import React from "react";
import { Link } from "react-router-dom";
import "./TalentCard.css";

export default function TalentCard(props) {
  const fullName = `${props.firstName} ${props.lastName}`;

  return (
    <div className="main">
      <div className="position__border image">
        <Link to={`/talents/${props.id}`}>
          <img src={props.profileImageUrl} alt="profile image" />
        </Link>
        <h1>{fullName}</h1>
      </div>
      <div className="position__border name">
        {/* <h1>{fullName}</h1> */}
        {/* <h6>{props.email}</h6> */}
      </div>
      {/* <div className="position__border">
        <Link to={`/talents/${props.id}`}>Learn More</Link>
      </div> */}
    </div>
  );
}
