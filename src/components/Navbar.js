import React, { useEffect } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../store/user/selectors";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@material-ui/core";
import { getUserWithStoredToken, logOut } from "../store/user/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const userLoggedIn = useSelector(selectUser);
  console.log("i am token", token);
  console.log("i am user logged in imageurl", userLoggedIn.profileImageUrl);

  return !token ? (
    <nav className="nav__main">
      <div className="navbar__left">
        <Link className="navbar__left__item1">Home</Link>
        <span> | </span>
        <Link className="navbar__left__item2">Talents</Link>
        <span> | </span>
        <Link className="navbar__left__item2">Campaigns</Link>
      </div>
      <div className="navbar__middle">
        <h1>Talent Hub</h1>
      </div>

      <div className="navbar__right">
        <Link to="/login" className="navbar__left__item1">
          Login
        </Link>
        <span> | </span>
        <Link to="/signup" className="navbar__left__item1">
          Sign Up
        </Link>

        <Avatar
          className="navbar__left__item1"
          alt="user"
          src={userLoggedIn.profileImageUrl}
        />
      </div>
    </nav>
  ) : userLoggedIn.isAdmin ? (
    <nav className="nav__main">
      <div className="navbar__left">
        <Link className="navbar__left__item1">Home</Link>
        <span> | </span>
        <Link className="navbar__left__item2">Talents</Link>
        <span> | </span>
        <Link className="navbar__left__item2">Campaigns</Link>
      </div>
      <div className="navbar__middle">
        <h1>Talent Hub</h1>
      </div>

      <div className="navbar__right">
        <Button
          onClick={() => dispatch(logOut())}
          to="/signup"
          className="navbar__left__item1"
        >
          logout
        </Button>

        <Avatar className="navbar__left__item1" alt="user" src="" />
      </div>
    </nav>
  ) : userLoggedIn.isTalent ? (
    <nav className="nav__main">
      <div className="navbar__left">
        <Link className="navbar__left__item1">Home</Link>
        <span> | </span>
        <Link className="navbar__left__item2">My Campaigns</Link>
      </div>
      <div className="navbar__middle">
        <h1>Talent Hub</h1>
      </div>

      <div className="navbar__right">
        <Button
          onClick={() => dispatch(logOut())}
          to="/signup"
          className="navbar__left__item1"
        >
          logout
        </Button>

        <Avatar className="navbar__left__item1" alt="user" src="" />
      </div>
    </nav>
  ) : (
    <nav className="nav__main">
      <div className="navbar__left">
        <Link className="navbar__left__item1">Home</Link>
        <span> | </span>
        <Link className="navbar__left__item2">Talents</Link>
        <span> | </span>
        <Link className="navbar__left__item2">Campaigns</Link>
      </div>
      <div className="navbar__middle">
        <h1>Talent Hub</h1>
      </div>

      <div className="navbar__right">
        <Button
          onClick={() => dispatch(logOut())}
          to="/signup"
          className="navbar__left__item1"
        >
          logout
        </Button>

        <Avatar className="navbar__left__item1" alt="user" src="" />
      </div>
    </nav>
  );
};

export default Navbar;
