import React from "react";

export default React.createContext({
  employees: [],
  projects: [],
  addEmployee: () => {},
  editEmployee: () => {},
  addProject: () => {},
  assignEmployee: () => {},
});
