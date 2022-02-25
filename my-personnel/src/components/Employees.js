import React from "react";
import EmployeeLink from "./EmployeeLink";
import ControlPanel from "./ControlPanel";
// import { EmployeeContext } from "../context/EmployeeContext";

const Employees = ({ employees, setEmployees }) => {
  // const employees = useContext(EmployeeContext);
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
