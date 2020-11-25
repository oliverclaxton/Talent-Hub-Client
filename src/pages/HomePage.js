import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div className="main__message">
        <h5>
          Welcome to the talent hub, your very own space to manage and organize
          your work.
        </h5>
      </div>
      <div className="main__message">
        <Link to="/login">Let's get started</Link>
      </div>
    </div>
  );
};

export default HomePage;
