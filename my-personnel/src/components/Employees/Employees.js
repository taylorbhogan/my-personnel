import React, { useState, useEffect } from "react";
import ControlPanel from "./ControlPanel";
import EmployeeLink from "./EmployeeLink";
import LoadingContent from "../AppUtils/LoadingContent";
import ContentNotFound from "../AppUtils/ContentNotFound";
import Errors from "../AppUtils/Errors";

const Employees = ({ employees, setEmployees }) => {
  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ errors, setErrors ] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("MY_PERSONNEL_ACCESS_TOKEN");

    // if (token !== null && Object.entries(employees).length === 0){
    // if (token !== null){
    const fetchEmployees = async () => {
      const employeeObject = {};

      try {
        const res = await fetch("/api/employees", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "MY_PERSONNEL_ACCESS_TOKEN"
            )}`,
          },
        });
        if (!res.ok) throw res;

        const data = await res.json();
        data.forEach((employee) => {
          employeeObject[employee._id] = employee;
        });

        setIsLoaded(true)
        setEmployees(employeeObject);

      } catch (err) {
        const errs = [...errors]
        errs.push(err.statusText)
        setErrors(errs)
      }
    };
    fetchEmployees();
    // }
  }, []);

  return (
    <div className={"container mx-auto"}>
      <ControlPanel employees={employees} setEmployees={setEmployees} />
      <Errors errors={errors}/>
      {isLoaded ? (
        Object.keys(employees).length > 0 ? (
          Object.values(employees).map((employee) => (
            <EmployeeLink key={employee._id} employee={employee} />
          ))
        ) : (
          <ContentNotFound />
        )
      ) : (
        <LoadingContent />
      )}
    </div>
  );
};

export default Employees;
