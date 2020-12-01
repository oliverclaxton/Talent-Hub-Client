import React from "react";
import "./Toolbar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import { Link, useHistory } from "react-router-dom";
import { Avatar, Button } from "@material-ui/core";
import { logOut } from "../../store/user/actions";

const Toolbar = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const userLoggedIn = useSelector(selectUser);
  const history = useHistory();

  return !token ? (
    <nav className="nav__main">
      <div className="navbar__left">
        <Link to="/" className="navbar__left__item1">
          <Button>Home</Button>
        </Link>
      </div>
      <div className="navbar__middle">
        <h1>Talent Hub</h1>
      </div>

      <div className="navbar__right">
        <Link to="/login" className="navbar__left__item1">
          <Button>Login</Button>
        </Link>
        <span> | </span>
        <Link to="/signup" className="navbar__left__item1">
          <Button> Sign Up</Button>
        </Link>
        <Avatar className="navbar__left__item1" alt="user" src="" />
      </div>
    </nav>
  ) : userLoggedIn.isAdmin ? (
    <nav className="nav__main">
      <div className="navbar__left">
        <Link to="/" className="navbar__left__item1">
          <Button>Home</Button>
        </Link>
        <span> | </span>
        <Link to="/talents" className="navbar__left__item2">
          <Button>Talents</Button>
        </Link>
        <span> | </span>
        <Link to="/campaigns" className="navbar__left__item2">
          <Button>Campaigns</Button>
        </Link>
      </div>
      <div className="navbar__middle">
        <h1>Talent Hub</h1>
      </div>

      <div className="navbar__right">
        <span>
          {userLoggedIn.firstName} {userLoggedIn.lastName} |
        </span>
        <Button
          onClick={() => {
            history.push("/login");
            dispatch(logOut());
          }}
          to="/signup"
          className="navbar__left__item1"
        >
          logout
        </Button>

        <Avatar
          className="navbar__left__item1"
          alt="user"
          src={userLoggedIn.profileImageUrl}
        />
      </div>
    </nav>
  ) : userLoggedIn.isTalent ? (
    <nav className="nav__main">
      <div className="navbar__left">
        <Link to="/" className="navbar__left__item1">
          <Button>Home</Button>
        </Link>
        <span> | </span>
        <Link to="/myCampaigns" className="navbar__left__item2">
          <Button>My Campaigns</Button>
        </Link>
      </div>
      <div className="navbar__middle">
        <h1>Talent Hub</h1>
      </div>

      <div className="navbar__right">
        <span>
          {userLoggedIn.firstName} {userLoggedIn.lastName} |
        </span>
        <Button
          onClick={() => {
            history.push("/login");
            dispatch(logOut());
          }}
          to="/signup"
          className="navbar__left__item1"
        >
          logout
        </Button>

        <Avatar
          className="navbar__left__item1"
          alt="user"
          src={userLoggedIn.profileImageUrl}
        />
      </div>
    </nav>
  ) : null;
};

export default Toolbar;
