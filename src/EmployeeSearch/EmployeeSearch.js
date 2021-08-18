import React from "react";
import countryListAllIsoData from "../STORE/countryList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./EmployeeSearch.css";

export default class EmployeeSearch extends React.Component {
  makeCountryList = () => {
    const list = countryListAllIsoData.map((i) => {
      return (
        <option key={i["code3"]} value={i["code3"]}>
          {i["name"]}
        </option>
      );
    });
    return list;
  };

  makeSearchInputHTML = () => {
    if (this.props.search_filter === "name") {
      return (
        <div className="search">
          <label htmlFor="search_employee_name" aria-label="name"></label>
          <input
            type="text"
            id="search_employee_name"
            placeholder="First or Last Name"
            onChange={this.handleChangeSearchQuery}
          ></input>
          <button type="button" onClick={this.props.handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      );
    } else if (this.props.search_filter === "country") {
      return (
        <div className="search">
          <label htmlFor="search_employee_country" aria-label="country"></label>
          <select onChange={this.handleChangeSearchQuery}>
            {this.makeCountryList()}
          </select>
          <button type="button" onClick={this.props.handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      );
    } else {
      return;
    }
  };

  handleChangeSearchFilter = (e) => {
    this.props.handleChangeSearchFilter(e.target.value);
  };

  handleChangeSearchQuery = (e) => {
    this.props.handleChangeSearchQuery(e.target.value);
  };

  render() {
    return (
      <div className="EmployeeSearch">
        <div className="EmployeeSearch__label">
          <p>Search</p>
        </div>
        <div className="EmployeeSearch__filter">
          <select onChange={this.handleChangeSearchFilter}>
            <option value="search_show_all">Show All</option>
            <option value="search_alphabetically_AZ">A-Z</option>
            <option value="search_alphabetically_ZA">Z-A</option>
            <option value="search_by_name">By Name</option>
            <option value="search_by_country">By Country</option>
          </select>
          {this.makeSearchInputHTML()}
        </div>
      </div>
    );
  }
}
