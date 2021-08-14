import React from "react";

export default React.createContext({
  employees: [],
  customers: [],
  projects: [],
  assignments: [],
  addEmployee: () => {},
  editEmployee: () => {},
  addCustomer: () => {},
  editCustomer: () => {},
  addProject: () => {},
  editProject: () => {},
  addAssignment: () => {},
  editAssignment: () => {},
});
