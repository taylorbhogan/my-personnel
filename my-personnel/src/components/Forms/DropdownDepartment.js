import { useState, useEffect } from "react";

const DropdownDepartment = ({ value, setFunction }) => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const res = await fetch("/api/departments");
      const data = await res.json();
      setDepartments(data);
    };
    fetchDepartments();
    return () => {
      setDepartments("");
    };
  }, []);

  return (
    <select
      className="h-12 px-2"
      onChange={(e) => setFunction(e.target.value)}
      value={value}
    >
      <option disabled={true} defaultValue={true}>
        -select department-
      </option>
      {departments &&
        departments.map((department, idx) => (
          <option key={idx} value={department}>
            {department}
          </option>
        ))}
    </select>
  );
};

export default DropdownDepartment;
