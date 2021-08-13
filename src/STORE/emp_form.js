const emp_form = [
  {
    field: "emp_first_name",
    display_name: "First Name",
    type: "text",
    required: true,
  },
  {
    field: "emp_last_name",
    display_name: "Last Name",
    type: "text",
    required: true,
  },
  {
    field: "emp_country",
    display_name: "Country of Residence",
    type: "select",
    required: true,
  },
  {
    field: "emp_dob",
    display_name: "Date of Birth",
    type: "date",
    required: true,
  },
];

export default emp_form;
