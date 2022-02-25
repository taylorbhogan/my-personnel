import React, {useState} from 'react';
import { useParams } from 'react-router-dom'
import { BsHouseDoor, BsHouseDoorFill, BsArrowLeftCircle, BsArrowLeftCircleFill } from "react-icons/bs";

const Employee = ({employees}) => {
  const [backHover, setBackHover] = useState(false);

  const {employeeId} = useParams();

  const employee = employees[employeeId];

  return (
    <>
      <a
        href="/employees"
        className="absolute top-0 left-12 m-6"
        onMouseEnter={() => setBackHover(true)}
        onMouseLeave={() => setBackHover(false)}
        >
        {backHover ? <BsArrowLeftCircleFill size={32} /> : <BsArrowLeftCircle size={32} />}
      </a>
      <div>hello from Employee</div>
      <div>{employee && employee._id}</div>
    </>
  );
};

export default Employee;
