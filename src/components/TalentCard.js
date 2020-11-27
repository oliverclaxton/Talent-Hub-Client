import React from "react";
import { Link } from "react-router-dom";

export default function TalentCard(props) {
  const fullName = `${props.firstName} ${props.lastName}`;

  return (
    <div>
      <div>
        <Link to={`/talents/${props.id}`}>
          <img src={props.profileImageUrl} alt="" />
        </Link>
      </div>
      <div>
        <h1>{fullName}</h1>
        <h6>{props.email}</h6>
      </div>
      <div>
        <Link to={`/talents/${props.id}`}>Learn More</Link>
      </div>
    </div>
  );
}
