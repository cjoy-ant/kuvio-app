import React from "react";
import kiwi from "../STORE/images/unsplash-goldenkiwi.jpg";
import thread from "../STORE/images/unsplash-thread.jpg";
import plantleaves from "../STORE/images/unsplash-bigleaves.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="About__main">
        <h2>About</h2>
        <h3>Features</h3>
        <div className="line-large blue"></div>
        <div className="group">
          <div className="item">
            <h4>Employee Directory</h4>
            <ul>
              <li>View list of employees</li>
              <li>Search for employees (alphabetically, by country)</li>
              <li>Add new employees</li>
              <li>Edit current employee information</li>
              <li>
                Employee information includes: first name, last name, country,
                date of birth, age, and assigned projects
              </li>
            </ul>
          </div>
          <div className="item">
            <img src={kiwi} alt="golden kiwi" />
          </div>
        </div>
        <div className="group">
          <div className="item">
            <img src={thread} alt="spools of thread" />
          </div>
          <div className="item">
            <h4>List of Projects</h4>
            <ul>
              <li>Title</li>
              <li>Description</li>
              <li>Customer Contact</li>
              <li>Deadline</li>
            </ul>
          </div>
        </div>
        <h3>Technology Used</h3>
        <div className="line-large blue"></div>
        <div className="group">
          <div className="item">
            <h4>Frontend</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>ReactJS {"&"} React Router</li>
            </ul>
          </div>
          <div className="item">
            <h4>Backend</h4>
            <ul>
              <li>NodeJS</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src={plantleaves} alt="large leaves" />
      </div>
    </div>
  );
}
