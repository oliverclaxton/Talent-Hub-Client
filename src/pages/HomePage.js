import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectToken, selectUser } from "../store/user/selectors";
import "./HomePage.css";

const HomePage = () => {
  const token = useSelector(selectToken);
  const userLoggedIn = useSelector(selectUser);

  return (
    <div>
      <div className="main__message">
        <h5>
          Welcome to the talent hub, your very own space to manage and organize
          your work.
        </h5>
      </div>
      <div className="main__message">
        {!token ? (
          <Link to="/login">Let's get started</Link>
        ) : userLoggedIn.isAdmin ? (
          <Link to="/campaigns">Let's get started</Link>
        ) : userLoggedIn.isTalent ? (
          <Link to="/myCampaings">Let's get started</Link>
        ) : null}
      </div>
    </div>
  );
};

export default HomePage;
