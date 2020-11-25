import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

const Navbar = () => {
  const token = useSelector(selectToken);
  //   console.log("i am token", token);

  return (
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
        <Link className="navbar__left__item1">Login</Link>
        <span> | </span>
        <Link className="navbar__left__item1">Sign Up</Link>
        <Avatar className="navbar__left__item1" alt="user" src="" />
      </div>
    </nav>
  );
};

export default Navbar;
