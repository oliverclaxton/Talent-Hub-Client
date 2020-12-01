import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectToken, selectUser } from "../../store/user/selectors";
import "./HomePage.css";

const HomePage = () => {
  const token = useSelector(selectToken);
  const userLoggedIn = useSelector(selectUser);

  return (
    <div className="background__image">
      <div className="main__message">
        <h5>
          Welcome to the talent hub, your very own space to manage and organize
          your work.
        </h5>
      </div>
      <div className="main__message link__hover">
        {!token ? (
          <Link to="/login" className="link__hover">
            <Button> Let's get started</Button>
          </Link>
        ) : userLoggedIn.isAdmin ? (
          <Link to="/talents" className="link__hover">
            <Button> Let's get started</Button>
          </Link>
        ) : userLoggedIn.isTalent ? (
          <Link to="/myCampaigns" className="link__hover">
            <Button> Let's get started</Button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default HomePage;
