import React from "react";
import emp_form from "../STORE/emp_form";
import countryListAllIsoData from "../STORE/countryList";
import Context from "../Context";
import config from "../config";
import "./AddEmployee.css";

export default class AddEmployee extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    country: "",
    dob: "",
    age: "",
  };

  static contextType = Context;

  handleChangeFirstName = (e) => {
    this.setState({
      first_name: e.target.value.toLowerCase(),
    });
  };

  handleChangeLastName = (e) => {
    this.setState({
      last_name: e.target.value.toLowerCase(),
    });
  };

  handleChangeCountry = (e) => {
    this.setState({
      country: e.target.value,
    });
  };

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

  handleChangeDob = (e) => {
    this.setState({
      dob: e.target.value,
      age: this.getAge(e.target.value),
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

    const newEmployee = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      country: this.state.country,
      dob: this.state.dob,
      age: this.state.age,
    };

    fetch(`${config.API_ENDPOINT}/employees`, {
      method: "POST",
      body: JSON.stringify(newEmployee),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Something went wrong`);
        }
        return res.json();
      })
      .then((res) => {
        this.context.addEmployee(newEmployee);
        this.props.history.push(`/employees`);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  handleCancel = () => {
    this.props.history.push("/employees");
  };

  render() {
    return (
      <div className="AddEmployee">
        <h2>Add New Employee</h2>
        <form name="AddEmployee__form" onSubmit={this.handleSubmit}>
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
            onChange={this.handleChangeDob}
          ></input>
          <div className="AddEmployee__button-container">
            <button type="submit" className="AddEmployee__button-submit">
              Save
            </button>
            <button
              type="button"
              className="AddEmployee__button-cancel"
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
