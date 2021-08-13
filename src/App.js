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
import "./App.css";

class App extends React.Component {
  render() {
    const value = {};
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
