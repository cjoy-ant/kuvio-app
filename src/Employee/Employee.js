import React from "react";
import { Link } from "react-router-dom";
import countryListAllIsoData from "../STORE/countryList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import "./Employee.css";

export default class Employee extends React.Component {
  render() {
    const { emp_id, first_name, last_name, country, age, dob } = this.props;

    const capitalizeFirstLetter = (string) => {
      if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    };

    const getCountryName = (countryCode) => {
      if (countryCode) {
        const country = countryListAllIsoData.find(
          (i) => i.code3 === countryCode
        );
        return country.name;
      }
    };

    return (
      <div className="Employee">
        <span className="Employee__name">
          <span className="bold">Name:</span> {capitalizeFirstLetter(last_name)}
          {", "}
          {capitalizeFirstLetter(first_name)}
        </span>
        <br />
        <span className="Employee__country">
          <span className="bold">Country:</span> {getCountryName(country)}
        </span>
        <br />
        <span className="Employee__dob">
          <span className="bold">Date of Birth:</span>{" "}
          {format(utcToZonedTime(dob), "MMMM d, yyyy")}
        </span>
        <br />
        <span className="Employee__age">
          <span className="bold">Age:</span> {age}
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
