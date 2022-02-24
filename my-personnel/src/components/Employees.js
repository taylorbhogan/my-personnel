import React from "react";
import EmployeeLink from "./EmployeeLink";
import ControlPanel from "./ControlPanel";
// import { EmployeeContext } from "../context/EmployeeContext";

const Employees = ({employees}) => {

  // const employees = useContext(EmployeeContext);
  return (
    <>
      <h2>All Employees:</h2>
      <ControlPanel />
      {employees &&
        Object.values(employees).map((employee) => (
        <EmployeeLink
          key={employee._id}
          employee={employee}
        />
        ))}
    </>
  );
};

export default Employees;
