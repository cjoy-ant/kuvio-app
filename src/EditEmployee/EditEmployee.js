import React from "react";
import emp_form from "../STORE/emp_form";
import countryListAllIsoData from "../STORE/countryList";
import Context from "../Context";
import config from "../config";
import "./EditEmployee.css";

export default class EditEmployee extends React.Component {
  state = {
    emp_id: "",
    first_name: "",
    last_name: "",
    country: "",
    dob: "",
    age: "",
  };

  static contextType = Context;

  componentDidMount() {
    const { emp_id } = this.props.match.params;
    fetch(`${config.API_ENDPOINT}/employees/${emp_id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }
        return res.json();
      })
      .then((res) => {
        this.setState({
          emp_id: res.emp_id,
          first_name: res.first_name,
          last_name: res.last_name,
          country: res.country,
          dob: res.dob,
          age: res.age,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  }

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

  getCountryName = (countryCode) => {
    if (countryCode) {
      const country = countryListAllIsoData.find(
        (i) => i.code3 === countryCode
      );
      return country.name;
    }
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

  handleSubmit = () => {
    const { emp_id } = this.props.match.params;

    const updatedEmployee = {
      emp_id: this.state.emp_id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      country: this.state.country,
      dob: this.state.dob,
      age: this.state.age,
    };

    fetch(`${config.API_ENDPOINT}/employees/${emp_id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedEmployee),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }
      })
      .then((res) => {
        this.context.editEmployee(updatedEmployee);
        this.props.history.push(`/employees`);
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };

  handleCancel = () => {
    this.props.history.push("/employees");
  };

  render() {
    const { first_name, last_name, country, dob } = this.state;

    return (
      <div className="EditEmployee">
        <h1>Edit Employee Information</h1>
        <form name="EditEmployee__form" onSubmit={this.handleSubmit}>
          <div className="form__main">
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
              defaultValue={first_name}
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
              defaultValue={last_name}
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
              defaultValue={country}
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
              defaultValue={dob.substr(0, 10)}
              onChange={this.handleChangeDob}
            ></input>
          </div>
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
