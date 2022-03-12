import React, { useEffect } from "react";
import EmployeeLink from "./EmployeeLink";
import ControlPanel from "./ControlPanel";
import LoadingContent from "./LoadingContent";

const Employees = ({ employees, setEmployees }) => {

  useEffect(() => {
    const token = localStorage.getItem('MY_PERSONNEL_ACCESS_TOKEN')

    if (token !== null && Object.entries(employees).length === 0){
      const fetchEmployees = async () => {
        const employeeObject = {};
        const res = await fetch("/api/employees",{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('MY_PERSONNEL_ACCESS_TOKEN')}`
          }
        });
        const data = await res.json();
        data.forEach((employee) => {
          employeeObject[employee._id] = employee;
        });

        setEmployees(employeeObject);
      };
      fetchEmployees();
    }
  },[])



  return (
    <div className={"container mx-auto"}>
      <ControlPanel employees={employees} setEmployees={setEmployees} />
      {Object.entries(employees).length > 0 ?
        Object.values(employees).map((employee) => (
          <EmployeeLink key={employee._id} employee={employee} />
        ))
      :
      <LoadingContent />
      }
    </div>
  );
};

export default Employees;
