import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import lowSeverity from "../../assets/Svg/coral_low.png";
import mediumSeverity from "../../assets/Svg/coral_medium.png";
import highSeverity from "../../assets/Svg/coral_reef.png";
import noSeverity from "../../assets/Svg/coral_no.png";
import unknownSeverity from "../../assets/Svg/coral_incom.png";

const Navbar = () => {
  return (
    <nav className="main-nav">
      {" "}
      <Link to="/" style={{ padding: "0 1rem", marginRight: "auto", textDecoration: "none", color: "var(--bg-secondary)" }}>
        {" "}
        <h2>Reefmap</h2>
      </Link>
      <div className="category-container">
        {" "}
        <img src={highSeverity} style={{ width: "1.7rem" }} />
        <Link to="/highSeverity" className="nav-item nav-btn large-text">
          High Severity
        </Link>
        <Link to="/highSeverity" className="nav-item nav-btn small-text">
          High
        </Link>
      </div>
      <div className="category-container">
        <img src={mediumSeverity} style={{ width: "1.7rem" }} />
        <Link to="/mediumSeverity" className="nav-item nav-btn large-text">
          Medium Severity
        </Link>
        <Link to="/mediumSeverity" className="nav-item nav-btn small-text">
          Medium
        </Link>
      </div>
      <div className="category-container">
        <img src={lowSeverity} style={{ width: "1.7rem" }} />
        <Link to="/lowSeverity" className="nav-item nav-btn large-text">
          Low Severity
        </Link>
        <Link to="/lowSeverity" className="nav-item nav-btn small-text">
          Low
        </Link>
      </div>
      <div className="category-container">
        <img src={noSeverity} style={{ width: "1.7rem" }} />
        <Link to="/noSeverity" className="nav-item nav-btn large-text">
          No Severity
        </Link>
        <Link to="/noSeverity" className="nav-item nav-btn small-text">
          No
        </Link>
      </div>
      <div className="category-container">
        <img src={unknownSeverity} style={{ width: "1.7rem" }} />
        <Link to="/unknownSeverity" className="nav-item nav-btn large-text">
          Unknown Severity
        </Link>
        <Link to="/unknownSeverity" className="nav-item nav-btn small-text">
          Unknown
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
