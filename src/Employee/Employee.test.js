import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Employee from "./Employee";

describe(`<Employee />`, () => {
  const props = {
    emp_id: "0bccc578-03c6-11ec-9a03-0242ac130003",
    first_name: "Snapshot",
    last_name: "Test",
    country: "USA",
    age: "30",
    dob: "1990-12-30T00:00:00.000Z",
    date_modified: "2021-08-10T00:00:00.000Z",
  };

  it("renders <Employee /> by default", () => {
    const wrapper = shallow(<Employee />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders <Employee /> given props", () => {
    const wrapper = shallow(<Employee {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
