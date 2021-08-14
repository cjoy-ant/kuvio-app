import React from "react";
import customers from "../STORE/customers";
import employees from "../STORE/employees";
import "./Project.css";

export default class Project extends React.Component {
  render() {
    const {
      project_title,
      project_description,
      project_customer,
      project_deadline,
      project_assigned_employees,
    } = this.props;

    const getCustomer = (project_customer) => {
      const customer = customers.find(
        (i) => i.customer_id === project_customer
      );
      return customer;
    };

    const getAssignedEmployees = (project_assigned_employees) => {
      let assigned_employees = [];
      for (const i of employees) {
        if (project_assigned_employees.includes(i.emp_id)) {
          assigned_employees.push(i);
        }
      }

      const list = assigned_employees.map((i) => {
        const capitalizeFirstLetter = (string) => {
          return string.charAt(0).toUpperCase() + string.slice(1);
        };

        return (
          <li key={i.emp_id}>
            {capitalizeFirstLetter(i.emp_first_name)}{" "}
            {capitalizeFirstLetter(i.emp_last_name)}
          </li>
        );
      });
      return list;
    };

    return (
      <div className="Project">
        <span className="bold">Title: </span>
        {project_title}
        <br />
        <span className="bold">Description: </span>
        {project_description}
        <br />
        <br />
        <span className="bold">Customer Information:</span>
        <p className="customer_information">
          Name: {getCustomer(project_customer).customer_name}
          <br />
          Phone: {getCustomer(project_customer).customer_phone}
          <br />
          Email: {getCustomer(project_customer).customer_email}
        </p>
        <br />
        <span className="bold">Deadline: </span> {project_deadline}
        <br />
        <span className="bold">Assigned Employees: </span>
        <ul>{getAssignedEmployees(project_assigned_employees)}</ul>
      </div>
    );
  }
}
