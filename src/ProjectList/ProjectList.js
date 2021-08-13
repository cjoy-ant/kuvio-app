import React from "react";
import projects from "../STORE/projects";
import Project from "../Project/Project";
import "./ProjectList.css";

export default class ProjectList extends React.Component {
  makeProjectList = () => {
    const list = projects.map((i) => {
      return (
        <li key={i.project_id}>
          <Project
            project_id={i.project_id}
            project_title={i.project_title}
            project_description={i.project_description}
            project_customer={i.project_customer}
            project_deadline={i.project_deadline}
            project_assigned_employees={i.project_assigned_employees}
          />
          <div className="line-large blue"></div>
        </li>
      );
    });
    return list;
  };

  render() {
    return (
      <div className="ProjectList">
        <h2>Projects</h2>
        <ul>{this.makeProjectList()}</ul>
      </div>
    );
  }
}
