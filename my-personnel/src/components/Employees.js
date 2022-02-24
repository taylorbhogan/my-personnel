import React, { useEffect, useState } from "react";
import Employee from "./Employee";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const backendFetch = async () => {
      const res = await fetch("/api/");
      const data = await res.json();
      setEmployees(data);
    };
    backendFetch();
  });

  return (
    <>
      <h2>All Employees:</h2>
      {employees &&
        employees.map((employee) => (
        <Employee
          key={employee._id}
          employee={employee}
        />
        ))}
    </>
  );
};

export default Employees;
