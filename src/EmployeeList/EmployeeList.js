import React from "react";
import employees from "../STORE/employees";
import Employee from "../Employee/Employee";
import "./EmployeeList.css";

export default class EmployeeList extends React.Component {
  makeEmployeeList = () => {
    if (this.props.search_filter === "all") {
      const list = employees.map((i) => {
        return (
          <li key={i.emp_id}>
            <Employee
              emp_id={i.emp_id}
              emp_first_name={i.emp_first_name}
              emp_last_name={i.emp_last_name}
              emp_country={i.emp_country}
              emp_age={i.emp_age}
              emp_dob={i.emp_dob}
              emp_projects={i.emp_projects}
            />
            <div className="line-large blue"></div>
          </li>
        );
      });
      return list;
    } else if (this.props.search_filter === "AZ") {
      const sorted = employees.sort(function (a, b) {
        if (a.emp_last_name < b.emp_last_name) {
          return -1;
        }
        if (a.emp_last_name > b.emp_last_name) {
          return 1;
        }
        return 0;
      });
      const list = sorted.map((i) => {
        return (
          <li key={i.emp_id}>
            <Employee
              emp_id={i.emp_id}
              emp_first_name={i.emp_first_name}
              emp_last_name={i.emp_last_name}
              emp_country={i.emp_country}
              emp_age={i.emp_age}
              emp_dob={i.emp_dob}
              emp_projects={i.emp_projects}
            />
            <div className="line-large blue"></div>
          </li>
        );
      });
      return list;
    } else if (this.props.search_filter === "ZA") {
      const sorted = employees.sort(function (a, b) {
        if (a.emp_last_name < b.emp_last_name) {
          return 1;
        }
        if (a.emp_last_name > b.emp_last_name) {
          return -1;
        }
        return 0;
      });
      const list = sorted.map((i) => {
        return (
          <li key={i.emp_id}>
            <Employee
              emp_id={i.emp_id}
              emp_first_name={i.emp_first_name}
              emp_last_name={i.emp_last_name}
              emp_country={i.emp_country}
              emp_age={i.emp_age}
              emp_dob={i.emp_dob}
              emp_projects={i.emp_projects}
            />
            <div className="line-large blue"></div>
          </li>
        );
      });
      return list;
    } else if (
      this.props.search_filter === "name" &&
      this.props.show_results === true
    ) {
      const nameToMatch = this.props.search_query.toLowerCase();
      const matches = [];
      for (const i of employees) {
        if (
          i.emp_first_name.includes(nameToMatch) ||
          i.emp_last_name.includes(nameToMatch)
        ) {
          matches.push(i);
        }
      }
      if (matches.length > 0) {
        const list = matches.map((i) => {
          return (
            <li key={i.emp_id}>
              <Employee
                emp_id={i.emp_id}
                emp_first_name={i.emp_first_name}
                emp_last_name={i.emp_last_name}
                emp_country={i.emp_country}
                emp_age={i.emp_age}
                emp_dob={i.emp_dob}
                emp_projects={i.emp_projects}
              />
              <div className="line-large blue"></div>
            </li>
          );
        });
        return list;
      } else {
        return (
          <li>
            <div className="no_results italic">
              No employees found with the name '{this.props.search_query}'
            </div>
          </li>
        );
      }
    } else if (
      this.props.search_filter === "country" &&
      this.props.show_results === true
    ) {
      const countryNum = this.props.search_query;
      console.log(countryNum);
      const matches = employees.filter((i) => i.emp_country === countryNum);
      if (matches.length > 0) {
        const list = matches.map((i) => {
          return (
            <li key={i.emp_id}>
              <Employee
                emp_id={i.emp_id}
                emp_first_name={i.emp_first_name}
                emp_last_name={i.emp_last_name}
                emp_country={i.emp_country}
                emp_age={i.emp_age}
                emp_dob={i.emp_dob}
                emp_projects={i.emp_projects}
              />
              <div className="line-large blue"></div>
            </li>
          );
        });
        return list;
      } else {
        return (
          <li>
            <div className="no_results italic">
              No employees found from the country '{this.props.search_query}'
            </div>
          </li>
        );
      }
    }
  };

  render() {
    return (
      <div className="EmployeeList">
        <ul>{this.makeEmployeeList()}</ul>
      </div>
    );
  }
}
