import React from 'react';
import { useParams } from 'react-router-dom'

const Employee = ({employees}) => {
  const {employeeId} = useParams();

  const employee = employees[employeeId];

  return (
    <>
      <div>hello from Employee</div>
      <div>{employee && employee._id}</div>
    </>
  );
};

export default Employee;
