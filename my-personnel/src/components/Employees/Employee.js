import React from "react";
import { useParams } from "react-router-dom";
import Address from "./EmployeeAddress";
import LoadingContent from "../AppUtils/LoadingContent";
import Contact from "./EmployeeContact";
import Corporate from "./EmployeeCorporate";
import ButtonEmployeeDelete from "./ButtonEmployeeDelete";
import BackLink from "../Navigation/BackLink";

const Employee = ({ employees, setEmployees }) => {
  const { employeeId } = useParams();

  const employee = employees[employeeId];

  return employee ? (
    <>
      <BackLink />
      <div className="container mx-auto flex mt-24 p-6 border-4 rounded-lg border-sky-500">
        <div className="basis-1/3 flex flex-col items-center">
          <img
            src={employee.imgUrl}
            alt="professional headshot of this employee"
          />
          <div className="m-6">
            <ButtonEmployeeDelete
              employees={employees}
              setEmployees={setEmployees}
              id={employee._id}
            />
          </div>
        </div>
        <div className="basis-2/3 pl-8">
          <Corporate
            employee={employee}
            employees={employees}
            setEmployees={setEmployees}
          />
          <div className="mt-6">
            <Address
              employee={employee}
              employees={employees}
              setEmployees={setEmployees}
            />
          </div>
          <div className="mt-6">
            <Contact
              employee={employee}
              employees={employees}
              setEmployees={setEmployees}
            />
          </div>
        </div>
      </div>
    </>
  ) : (
    <LoadingContent />
  );
};

export default Employee;
