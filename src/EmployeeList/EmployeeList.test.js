import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import EmployeeList from "./EmployeeList";
import Context from "../Context";

describe(`<EmployeeList />`, () => {
  it("renders <EmployeeList /> by default", () => {
    const wrapper = shallow(<EmployeeList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // enzyme doesn't support React.createContext
  it(`renders <Employee /> in ul for each employee in the array`, () => {
    const props = {
      search_filter: "all",
      search_query: "",
      show_results: "false",
    };

    const context = {
      employees: [
        {
          emp_id: "076a6bc0-fa0c-11eb-9a03-0242ac130003",
          emp_first_name: "marcelina",
          emp_last_name: "manuel",
          emp_dob: "1992-01-31",
          emp_age: "29",
          emp_country: "608",
          emp_date_modified: "2021-08-10T00:00",
        },
        {
          emp_id: "100e737a-fa0c-11eb-9a03-0242ac130003",
          emp_first_name: "roger",
          emp_last_name: "liu",
          emp_dob: "1988-08-09",
          emp_age: "33",
          emp_country: "156",
          emp_date_modified: "2021-08-10T00:00",
        },
        {
          emp_id: "16aa454c-fa0c-11eb-9a03-0242ac130003",
          emp_first_name: "abbey",
          emp_last_name: "livingston",
          emp_dob: "1975-04-25",
          emp_age: "46",
          emp_country: "826",
          emp_date_modified: "2021-08-10T00:00",
        },
        {
          emp_id: "1eddb3c0-fa0c-11eb-9a03-0242ac130003",
          emp_first_name: "jason",
          emp_last_name: "salazar",
          emp_dob: "1981-11-04",
          emp_age: "31",
          emp_country: "724",
          emp_date_modified: "2021-08-10T00:00",
        },
        {
          emp_id: "2607b45c-fa0c-11eb-9a03-0242ac130003",
          emp_first_name: "trevor",
          emp_last_name: "harrison",
          emp_dob: "1986-10-10",
          emp_age: "34",
          emp_country: "840",
          emp_date_modified: "2021-08-10T00:00",
        },
        {
          emp_id: "28b87cb8-fa0c-11eb-9a03-0242ac130003",
          emp_first_name: "ruth",
          emp_last_name: "morgan",
          emp_dob: "1993-12-07",
          emp_age: "27",
          emp_country: "840",
          emp_date_modified: "2021-08-10T00:00",
        },
      ],
    };

    // const TestComponent = () => {
    //   const { employees } = React.useContext(Context);

    //   const makeEmployeeList = () => {
    //     const list = employees.map((i) => {
    //       return (
    //         <li key={i.emp_id}>
    //           <Employee
    //             emp_id={i.emp_id}
    //             first_name={i.first_name}
    //             last_name={i.last_name}
    //             country={i.country}
    //             age={i.age}
    //             dob={i.dob}
    //           />
    //           <div className="line-large blue"></div>
    //         </li>
    //       );
    //     });
    //     return list;
    //   };

    //   return makeEmployeeList();
    // };

    // const wrapper = mount(
    //   <Context.Provider values={...values}>
    //     <TestComponent {...props} />
    //   </Context.Provider>
    // );

    const wrapper = shallow(<EmployeeList {...props} />, context);
    const ul = wrapper.find("ul");
    expect(toJson(ul)).toMatchSnapshot();
  });
});
