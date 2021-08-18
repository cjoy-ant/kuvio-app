import React from "react";
import { Link } from "react-router-dom";
import EmployeeSearch from "../EmployeeSearch/EmployeeSearch";
import EmployeeList from "../EmployeeList/EmployeeList";
import "./EmployeeDirectory.css";

export default class EmployeeDirectory extends React.Component {
  state = {
    search_filter: "all",
    search_query: "",
    show_results: false,
  };

  handleChangeSearchFilter = (filter) => {
    if (filter === "search_show_all") {
      this.setState({
        search_filter: "all",
        search_query: "",
        show_results: false,
      });
    } else if (filter === "search_alphabetically_AZ") {
      this.setState({
        search_filter: "AZ",
        search_query: "",
        show_results: false,
      });
    } else if (filter === "search_alphabetically_ZA") {
      this.setState({
        search_filter: "ZA",
        search_query: "",
        show_results: false,
      });
    } else if (filter === "search_by_name") {
      this.setState({
        search_filter: "name",
        search_query: "",
        show_results: false,
      });
    } else if (filter === "search_by_country") {
      this.setState({
        search_filter: "country",
        search_query: "",
        show_results: false,
      });
    }
  };

  handleChangeSearchQuery = (query) => {
    this.setState({
      search_query: query,
      show_results: false,
    });
  };

  handleSearch = () => {
    this.setState({ show_results: true });
  };

  render() {
    return (
      <div className="EmployeeDirectory">
        <h1>Employees</h1>
        <div className="EmployeeDirectory__button-container">
          <button className="add-employee" type="button">
            <Link to="/add-employee">Add an Employee</Link>
          </button>
          <EmployeeSearch
            search_filter={this.state.search_filter}
            handleChangeSearchFilter={this.handleChangeSearchFilter}
            handleChangeSearchQuery={this.handleChangeSearchQuery}
            handleSearch={this.handleSearch}
          />
        </div>
        <EmployeeList
          search_filter={this.state.search_filter}
          search_query={this.state.search_query}
          show_results={this.state.show_results}
        />
      </div>
    );
  }
}

// VIEW list of employees <Employee Directory/>
// ADD new employee <AddEmployee />
// EDIT current employees <EditEmployee /> (on <EmployeePage />)
// SEARCH for employees 1) alphabetically 2) by country (<EmployeeDirectory />)
