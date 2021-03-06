import React from "react";
import Employee from "../Employee/Employee";
import Context from "../Context";
import "./EmployeeList.css";

export default class EmployeeList extends React.Component {
  static contextType = Context;

  makeEmployeeList = () => {
    if (this.props.search_filter === "all") {
      const list = this.context.employees.map((i) => {
        return (
          <li key={i.emp_id}>
            <Employee
              emp_id={i.emp_id}
              first_name={i.first_name}
              last_name={i.last_name}
              country={i.country}
              age={i.age}
              dob={i.dob}
            />
            <div className="line-large blue"></div>
          </li>
        );
      });
      return list;
    } else if (this.props.search_filter === "AZ") {
      const sorted = this.context.employees.sort(function (a, b) {
        if (a.last_name < b.last_name) {
          return -1;
        }
        if (a.last_name > b.last_name) {
          return 1;
        }
        return 0;
      });
      const list = sorted.map((i) => {
        return (
          <li key={i.emp_id}>
            <Employee
              emp_id={i.emp_id}
              first_name={i.first_name}
              last_name={i.last_name}
              country={i.country}
              age={i.age}
              dob={i.dob}
            />
            <div className="line-large blue"></div>
          </li>
        );
      });
      return list;
    } else if (this.props.search_filter === "ZA") {
      const sorted = this.context.employees.sort(function (a, b) {
        if (a.last_name < b.last_name) {
          return 1;
        }
        if (a.last_name > b.last_name) {
          return -1;
        }
        return 0;
      });
      const list = sorted.map((i) => {
        return (
          <li key={i.emp_id}>
            <Employee
              emp_id={i.emp_id}
              first_name={i.first_name}
              last_name={i.last_name}
              country={i.country}
              age={i.age}
              dob={i.dob}
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
      for (const i of this.context.employees) {
        if (
          i.first_name.includes(nameToMatch) ||
          i.last_name.includes(nameToMatch)
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
                first_name={i.first_name}
                last_name={i.last_name}
                country={i.country}
                age={i.age}
                dob={i.dob}
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
      const matches = this.context.employees.filter(
        (i) => i.country === countryNum
      );
      if (matches.length > 0) {
        const list = matches.map((i) => {
          return (
            <li key={i.emp_id}>
              <Employee
                emp_id={i.emp_id}
                first_name={i.first_name}
                last_name={i.last_name}
                country={i.country}
                age={i.age}
                dob={i.dob}
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
