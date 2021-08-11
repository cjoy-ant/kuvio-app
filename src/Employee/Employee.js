import React from "react";
import { Link } from "react-router-dom";
import countryListAllIsoData from "../STORE/countryList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import "./Employee.css";

export default class Employee extends React.Component {
  render() {
    const {
      emp_id,
      emp_first_name,
      emp_last_name,
      emp_country,
      emp_age,
      emp_dob,
      // emp_projects
    } = this.props;

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const getCountryName = (emp_country) => {
      const country = countryListAllIsoData.find(
        (i) => i.number === emp_country
      );
      return country.name;
    };

    return (
      <div className="Employee">
        <span className="Employee__name">
          <span className="bold">Name:</span>{" "}
          {capitalizeFirstLetter(emp_last_name)}
          {", "}
          {capitalizeFirstLetter(emp_first_name)}
        </span>
        <br />
        <span className="Employee__country">
          <span className="bold">Country:</span> {getCountryName(emp_country)}
        </span>
        <br />
        <span className="Employee__dob">
          <span className="bold">Date of Birth:</span> {emp_dob}
        </span>
        <br />
        <span className="Employee__age">
          <span className="bold">Age:</span> {emp_age}
        </span>
        <br />
        <Link to={`edit-employee/${emp_id}`}>
          <button className="Employee__edit-btn" type="button">
            <FontAwesomeIcon icon={faUserEdit} alt="edit employee" />
          </button>
        </Link>
      </div>
    );
  }
}
