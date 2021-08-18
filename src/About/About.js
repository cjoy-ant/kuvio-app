import React from "react";
import kiwi from "../STORE/images/unsplash-goldenkiwi.jpg";
import thread from "../STORE/images/unsplash-thread.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="About__main">
        <h1>About</h1>
        <h2>Features</h2>
        <div className="line-large blue"></div>
        <div className="group empDirectory">
          <div className="item">
            <h3>Employee Directory</h3>
            <ul>
              <li>View list of employees</li>
              <li>Search for employees (alphabetically, by country)</li>
              <li>Add new employees</li>
              <li>Edit current employee information</li>
              <li>
                Employee information includes: first name, last name, country,
                date of birth, and age
              </li>
            </ul>
          </div>
          <div className="item">
            <img src={kiwi} alt="golden kiwi" />
          </div>
        </div>
        <div className="group projects">
          <div className="item">
            <img src={thread} alt="spools of thread" />
          </div>
          <div className="item">
            <h3>List of Projects</h3>
            <ul>
              <li>Title</li>
              <li>Description</li>
              <li>Customer Contact</li>
              <li>Deadline</li>
            </ul>
          </div>
        </div>
        <h2>Technology</h2>
        <div className="line-large blue"></div>
        <div className="group technology">
          <div className="item">
            <h3>Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>ReactJS {"&"} React Router</li>
            </ul>
          </div>
          <div className="item">
            <h3>Backend</h3>
            <ul>
              <li>NodeJS</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
