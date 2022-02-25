import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BsArrowLeftCircle, BsArrowLeftCircleFill } from "react-icons/bs";
import LoadingContent from "./LoadingContent";

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
      <div className="container mx-auto flex mt-24 bg-sky-500">
        <div className="basis-1/3 flex justify-center">
          <img
            src={employee === undefined ? 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/635.jpg' : employee.imgUrl}
            alt="professional headshot of this employee"
          />
        </div>
        <div className="basis-2/3">
          <h2 className="text-3xl">
            {`${employee.name.first} ${employee.name.middle} ${employee.name.last}`}
          </h2>
          <p className="text-xl">{employee.title}</p>
          <p className="text-xl">{employee.department}</p>
          <p className="text-xl">{employee._id}</p>
        </div>
      </div>
    </>
  ) : (
    <LoadingContent />
  );
};

export default Employee;
