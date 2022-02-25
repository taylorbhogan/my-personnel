import { useState, useEffect } from "react";

const DropdownDepartment = ({ setFunction }) => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const res = await fetch("/api/departments");
      const data = await res.json();
      setDepartments(data);
    };
    fetchDepartments();
  }, []);

  return (
    <select onChange={(e) => setFunction(e.target.value)}>
      <option disabled={true} selected={true}>
        -select department-
      </option>
      {departments &&
        departments.map((department) => (
          <option value={department}>{department}</option>
        ))}
    </select>
  );
};

export default DropdownDepartment;
