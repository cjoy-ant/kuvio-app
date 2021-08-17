import React from "react";
import Project from "../Project/Project";
import Context from "../Context";
import "./ProjectList.css";

export default class ProjectList extends React.Component {
  static contextType = Context;
  makeProjectList = () => {
    const list = this.context.projects.map((i) => {
      return (
        <li key={i.project_id}>
          <Project
            project_id={i.project_id}
            title={i.title}
            project_description={i.project_description}
            customer={i.customer}
            deadline={i.deadline}
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
