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
    <select className="h-12 px-2" onChange={(e) => setFunction(e.target.value)}>
      <option disabled={true} defaultValue={true}>
        -select department-
      </option>
      {departments &&
        departments.map((department, idx) => (
          <option key={idx} value={department}>{department}</option>
        ))}
    </select>
  );
};

export default DropdownDepartment;
