import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="Nav">
      <div className="group">
        <div className="item">
          <header>
            <Link to="/">
              <img src={logo} alt="logo" className="Nav__logo" />
            </Link>
          </header>
        </div>
        <div className="item">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/employees">Employees</Link>
            <Link to="/projects">Projects</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
