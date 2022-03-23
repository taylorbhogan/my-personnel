import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Address from "./EmployeeAddress";
import EmployeeLoadingContent from "../AppUtils/LoadingContentLottie";
import Contact from "./EmployeeContact";
import Corporate from "./EmployeeCorporate";
import ButtonEmployeeDelete from "./ButtonEmployeeDelete";
import Errors from "../AppUtils/Errors";

const Employee = ({ employees, setEmployees }) => {
  const [errors, setErrors] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { employeeId } = useParams();

  const employee = employees[employeeId];

  useEffect(() => {
    const fetchEmployee = async () => {
      const employeeObject = {};
      try {
        const res = await fetch(`/api/employees/${employeeId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "MY_PERSONNEL_ACCESS_TOKEN"
            )}`,
          },
        });
        setIsLoaded(true);
        if (!res.ok) throw res;

        const data = await res.json();
        employeeObject[employeeId] = data;
        setEmployees(employeeObject);
      } catch (err) {
        if (err.status === 404) {
          const errs = [...errors];
          errs.push("No Employee Record for this ID was found in the Database");
          setErrors(errs);
        } else {
          const errs = [...errors];
          errs.push(err.statusText);
          setErrors(errs);
        }
      }
    };

    fetchEmployee();
  }, []);

  // only render Errors if employee (loading from Employees) or if isLoaded (we have already fetched from the useEffect); otherwise show EmployeeLoadingContent while fetching
  return employee || isLoaded ? (
    <>
      <Errors errors={errors} />
     {/* only render the employee info if employee (loading from Employees or the useEffect fetch was successful) */}
      {employee && (
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
      )}
    </>
  ) : (
    <EmployeeLoadingContent />
  );
};

export default Employee;
