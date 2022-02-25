import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BsArrowLeftCircle, BsArrowLeftCircleFill } from "react-icons/bs";
import Address from "./Address";
import LoadingContent from "../LoadingContent";
import Contact from "./Contact";
import Corporate from "./Corporate";
import ButtonEmployeeEdit from "../Forms/ButtonEmployeeEdit";
import ButtonEmployeeDelete from "../Forms/ButtonEmployeeDelete";

const Employee = ({ employees }) => {
  const [backHover, setBackHover] = useState(false);

  const { employeeId } = useParams();

  const employee = employees[employeeId];

  return employee ? (
    <>
      <a
        href="/employees"
        className="absolute top-0 left-12 m-6"
        onMouseEnter={() => setBackHover(true)}
        onMouseLeave={() => setBackHover(false)}
      >
        {backHover ? (
          <BsArrowLeftCircleFill size={32} />
        ) : (
          <BsArrowLeftCircle size={32} />
        )}
      </a>
      <div className="container mx-auto flex mt-24 p-6 border-4 rounded-lg border-sky-500">
        <div className="basis-1/3 flex flex-col items-center">
          <img
            src={employee.imgUrl}
            alt="professional headshot of this employee"
          />
          <div className="flex justify-around m-6 w-full">
            <ButtonEmployeeEdit />
            <ButtonEmployeeDelete id={employee._id}/>
          </div>
        </div>
        <div className="basis-2/3 pl-8">
          <Corporate employee={employee} />
          <Address employee={employee} />
          <Contact employee={employee} />
        </div>
      </div>
    </>
  ) : (
    <LoadingContent />
  );
};

export default Employee;
