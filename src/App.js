import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import EmployeeDirectory from "./EmployeeDirectory/EmployeeDirectory";
import AddEmployee from "./AddEmployee/AddEmployee";
import EditEmployee from "./EditEmployee/EditEmployee";
import ProjectList from "./ProjectList/ProjectList";
import Context from "./Context";
import config from "./config";
import countryListAllIsoData from "./STORE/countryList";
import "./App.css";

class App extends React.Component {
  state = {
    employees: [],
    customers: [],
    projects: [],
    assignments: [],
  };

  componentDidMount() {
    this.setState({
      countries: countryListAllIsoData,
    });

    Promise.all([
      fetch(`${config.API_ENDPOINT}/employees`),
      fetch(`${config.API_ENDPOINT}/customers`),
      fetch(`${config.API_ENDPOINT}/projects`),
      fetch(`${config.API_ENDPOINT}/assignments`),
    ]).then(([employeesRes, customersRes, projectsRes, assignmentsRes]) => {
      if (!employeesRes.ok) {
        return employeesRes.json().then((e) => Promise.reject(e));
      }
      if (!customersRes.ok) {
        return customersRes.json().then((e) => Promise.reject(e));
      }
      if (!projectsRes.ok) {
        return projectsRes.json().then((e) => Promise.reject(e));
      }
      if (!assignmentsRes.ok) {
        return assignmentsRes.json().then((e) => Promise.reject(e));
      }
      return Promise.all([
        employeesRes.json(),
        customersRes.json(),
        projectsRes.json(),
        assignmentsRes.json(),
      ])
        .then(([employees, customers, projects, assignments]) => {
          this.setState({ employees, customers, projects, assignments });
        })
        .catch((error) => {
          console.error({ error });
        });
    });
  }

  fetchEmployees = () => {
    fetch(`${config.API_ENDPOINT}/employees`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((res) => {
        this.setState({
          employees: res,
        });
      });
  };

  fetchCustomers = () => {
    fetch(`${config.API_ENDPOINT}/customers`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((res) => {
        this.setState({
          customers: res,
        });
      });
  };

  fetchProjects = () => {
    fetch(`${config.API_ENDPOINT}/projects`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((res) => {
        this.setState({
          projects: res,
        });
      });
  };

  fetchAssignments = () => {
    fetch(`${config.API_ENDPOINT}/assignments`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((res) => {
        this.setState({
          assignments: res,
        });
      });
  };

  addEmployee = (newEmployee) => {
    this.fetchEmployees();
  };

  editEmployee = (updatedEmployee) => {
    this.fetchEmployees();
  };

  addCustomer = (newCustomer) => {
    this.fetchCustomers();
  };

  editCustomer = (updatedCustomer) => {
    this.fetchCustomers();
  };

  addProject = (newProject) => {
    this.fetchProjects();
  };

  editProject = (updatedProject) => {
    this.fetchProjects();
  };

  addAssignment = (newAssignment) => {
    this.fetchAssignments();
  };

  editAssignment = (updatedAssignment) => {
    this.fetchAssignments();
  };

  render() {
    const value = {
      countries: this.state.countries,
      employees: this.state.employees,
      customers: this.state.customers,
      projects: this.state.projects,
      assignments: this.state.assignments,
      addEmployee: this.addEmployee,
      editEmployee: this.editEmployee,
      addCustomer: this.addCustomer,
      editCustomer: this.editCustomer,
      addProject: this.addProject,
      editProject: this.editProject,
      addAssignment: this.addAssignment,
      editAssignment: this.editAssignment,
    };

    return (
      <Context.Provider value={value}>
        <div className="App">
          <div className="App__main">
            <Route path="/" component={Nav} />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/employees" component={EmployeeDirectory} />
            <Route exact path="/add-employee" component={AddEmployee} />
            <Route path="/edit-employee/:id" component={EditEmployee} />
            <Route path="/projects" component={ProjectList} />
          </div>
          <div className="App__footer">
            <footer>© 2021 Christine Antonio</footer>
          </div>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
