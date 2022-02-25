import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeftCircle, BsArrowLeftCircleFill } from "react-icons/bs";
import Address from "./Address";
import LoadingContent from "../LoadingContent";
import Contact from "./Contact";
import Corporate from "./Corporate";
import ButtonEmployeeDelete from "../Forms/ButtonEmployeeDelete";

const Employee = ({ employees, setEmployees }) => {
  const [backHover, setBackHover] = useState(false);

  const { employeeId } = useParams();

  const employee = employees[employeeId];

  return employee ? (
    <>
      <Link
        to={"/employees"}
        className="absolute top-0 left-12 m-6"
        onMouseEnter={() => setBackHover(true)}
        onMouseLeave={() => setBackHover(false)}
      >
        {backHover ? (
          <BsArrowLeftCircleFill size={32} />
        ) : (
          <BsArrowLeftCircle size={32} />
        )}
      </Link>
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
          <Corporate employee={employee} />
          <Address employee={employee} />
          <Contact employee={employee} employees={employees} setEmployees={setEmployees}/>
        </div>
      </div>
    </>
  ) : (
    <LoadingContent />
  );
};

export default Employee;
