import React from "react";
import Context from "../Context";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import "./Project.css";

export default class Project extends React.Component {
  static contextType = Context;

  render() {
    const { project_id, title, project_description, customer, deadline } =
      this.props;

    const getCustomer = (customer) => {
      const foundCustomer = this.context.customers.find(
        (i) => i.customer_id === customer
      );
      return foundCustomer;
    };

    const getAssignedEmployees = (project_id) => {
      const assignments = this.context.assignments.filter(
        (i) => i.project === project_id
      );
      const employeeIds = assignments.map((i) => i.employee);
      const assignedEmployees = [];
      for (const i of this.context.employees) {
        if (employeeIds.includes(i.emp_id)) {
          assignedEmployees.push(i);
        }
      }
      const list = assignedEmployees.map((i) => {
        const capitalizeFirstLetter = (string) => {
          return string.charAt(0).toUpperCase() + string.slice(1);
        };

        return (
          <li key={i.emp_id}>
            {capitalizeFirstLetter(i.first_name)}{" "}
            {capitalizeFirstLetter(i.last_name)}
          </li>
        );
      });
      return list;
    };

    return (
      <div className="Project">
        <span className="bold">Title: </span>
        {title}
        <br />
        <span className="bold">Description: </span>
        {project_description}
        <br />
        <br />
        <span className="bold">Customer Information:</span>
        <p className="customer_information">
          Name: {getCustomer(customer).customer_name}
          <br />
          Phone: {getCustomer(customer).phone}
          <br />
          Email: {getCustomer(customer).email}
        </p>
        <br />
        <span className="bold">Deadline: </span>{" "}
        {format(utcToZonedTime(deadline), "MMMM d, yyyy")}
        <br />
        <span className="bold">Assigned Employees: </span>
        <ul>{getAssignedEmployees(project_id)}</ul>
      </div>
    );
  }
}
