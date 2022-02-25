import React from "react";
import EmployeeLink from "./EmployeeLink";
import ControlPanel from "./ControlPanel";

const Employees = ({ employees, setEmployees }) => {
  return (
    <div className={"container mx-auto"}>
      <ControlPanel employees={employees} setEmployees={setEmployees} />
      {employees &&
        Object.values(employees).map((employee) => (
          <EmployeeLink key={employee._id} employee={employee} />
        ))}
    </div>
  );
};

export default Employees;
