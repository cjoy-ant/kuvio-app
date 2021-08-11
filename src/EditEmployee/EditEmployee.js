import React from "react";
import emp_form from "../STORE/emp_form";
import countryListAllIsoData from "../STORE/countryList";
import employees from "../STORE/employees";
import "./EditEmployee.css";

export default class EditEmployee extends React.Component {
  state = {
    emp_id: "",
    emp_first_name: "",
    emp_last_name: "",
    emp_country: "",
    emp_dob: "",
    emp_age: "",
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    const findEmployee = () => {
      const employee = employees.find((i) => i.emp_id === id);
      return employee;
    };

    const employee = findEmployee();

    this.setState({
      emp_id: employee.emp_id,
      emp_first_name: employee.emp_first_name,
      emp_last_name: employee.emp_last_name,
      emp_country: employee.emp_country,
      emp_dob: employee.emp_dob,
      emp_age: employee.emp_age,
    });
  }

  handleChangeFirstName = (e) => {
    this.setState({
      emp_first_name: e.target.value.toLowerCase(),
    });
  };

  handleChangeLastName = (e) => {
    this.setState({
      emp_last_name: e.target.value.toLowerCase(),
    });
  };

  handleChangeCountry = (e) => {
    this.setState({
      emp_country: e.target.value,
    });
  };

  makeCountryList = () => {
    const list = countryListAllIsoData.map((i) => {
      return (
        <option key={i["number"]} value={i["number"]}>
          {i["name"]}
        </option>
      );
    });
    return list;
  };

  getCountryName = (emp_country) => {
    const country = countryListAllIsoData.find((i) => i.number === emp_country);
    if (country) {
      return country.name;
    }
    return;
  };

  handleChangeDob = (e) => {
    this.setState({
      emp_dob: e.target.value,
      emp_age: this.getAge(e.target.value),
    });
  };

  getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleCancel = () => {
    this.props.history.push("/employees");
  };

  render() {
    const { emp_first_name, emp_last_name, emp_country, emp_dob } = this.state;

    return (
      <div className="EditEmployee">
        <h2>Edit Employee Information</h2>
        <form name="EditEmployee__form" onSubmit={this.handleSubmit}>
          <label
            htmlFor={emp_form[0].field}
            aria-label={emp_form[0].display_name}
          >
            {emp_form[0].display_name}
          </label>
          <input
            id={emp_form[0].field}
            type={emp_form[0].type}
            required={emp_form[0].required}
            defaultValue={emp_first_name}
            onChange={this.handleChangeFirstName}
          ></input>
          <br />

          <label
            htmlFor={emp_form[1].field}
            aria-label={emp_form[1].display_name}
          >
            {emp_form[1].display_name}
          </label>
          <input
            id={emp_form[1].field}
            type={emp_form[1].type}
            required={emp_form[1].required}
            defaultValue={emp_last_name}
            onChange={this.handleChangeLastName}
          ></input>
          <br />

          <label
            htmlFor={emp_form[2].field}
            aria-label={emp_form[2].display_name}
          >
            {emp_form[2].display_name}
          </label>
          <select
            id={emp_form[2].field}
            required={emp_form[2].required}
            defaultValue={this.getCountryName(emp_country)}
            onChange={this.handleChangeCountry}
          >
            <option key="0" value="">
              Select a Country
            </option>
            {this.makeCountryList()}
          </select>
          <br />

          <label
            htmlFor={emp_form[3].field}
            aria-label={emp_form[3].display_name}
          >
            {emp_form[3].display_name}
          </label>
          <input
            id={emp_form[3].field}
            type={emp_form[3].type}
            required={emp_form[3].required}
            defaultValue={emp_dob}
            onChange={this.handleChangeDob}
          ></input>
          <div className="EditEmployee__button-container">
            <button type="submit" className="EditEmployee__button-submit">
              Save
            </button>
            <button
              type="button"
              className="EditEmployee__button-cancel"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
