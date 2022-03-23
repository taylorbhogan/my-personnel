import { useState } from "react";
import ButtonEmployeeEdit from "../Forms/ButtonEmployeeEdit";
import Input from "../Forms/Input";
import InfoField from "../AppUtils/InfoField";
import DropdownDepartment from "../Forms/DropdownDepartment";

const Corporate = ({ employee, employees, setEmployees }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [firstName, setFirstName] = useState(employee.name?.first);
  const [middleName, setMiddleName] = useState(employee.name?.middle);
  const [lastName, setLastName] = useState(employee.name?.last);
  const [title, setTitle] = useState(employee.title);
  const [isAdmin, setIsAdmin] = useState(false);
  const [department, setDepartment] = useState(employee.department);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeObject = { ...employee };
    employeeObject.name.first = firstName;
    employeeObject.name.middle = middleName;
    employeeObject.name.last = lastName;
    employeeObject.title = title;
    employeeObject.isAdmin = isAdmin;
    employeeObject.department = department;

    const res = await fetch(`/api/employees/${employee._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('MY_PERSONNEL_ACCESS_TOKEN')}`

      },
      body: JSON.stringify(employeeObject),
    });
    if (res.ok) {
      const newEmployeeData = await res.json();

      const employeesObject = { ...employees };
      employeesObject[employee._id] = newEmployeeData;

      setEmployees(employeesObject);
      setIsEditable(false);
    } else {
      console.log("res", res);
    }
  };

  return (
    <div className="">
      {isEditable ? (
        <form className="flex" onSubmit={handleSubmit}>
          <div className="flex flex-col basis-5/6">
            <label>
              <span>First Name: </span>
              <Input
                type={"text"}
                value={firstName}
                name={"First Name"}
                onChange={(e) => setFirstName(e.target.value)}
                required={true}
                autoFocus={true}
              />
            </label>
            <label>
              <span>Middle Name: </span>
              <Input
                type={"text"}
                value={middleName}
                name={"Middle Name"}
                onChange={(e) => setMiddleName(e.target.value)}
                required={true}
              />
            </label>
            <label>
              <span>Last Name: </span>
              <Input
                type={"text"}
                value={lastName}
                placeholder={"Last Name"}
                ariaLabel={"Last Name"}
                onChange={(e) => setLastName(e.target.value)}
                required={true}
              />
            </label>

            <label>
              <span>Title: </span>
              <Input
                type={"text"}
                value={title}
                Name={"Title"}
                onChange={(e) => setTitle(e.target.value)}
                required={true}
              />
            </label>
            <label className="m-4">
              <span>Admin: </span>
              <input
                type={"checkbox"}
                checked={isAdmin}
                name={"isAdmin"}
                onChange={(e) => setIsAdmin(e.target.checked)}
                className="m-2"
              ></input>
            </label>
            <label>
              <span>Department: </span>
              <DropdownDepartment
                value={department}
                setFunction={(department) => setDepartment(department)}
              />
            </label>
          </div>
          <div className="flex flex-col basis-1/6">
            <button
              className="border-2 rounded-lg px-3 py-1 border-slate-500 hover:bg-slate-500 hover:text-white"
              onClick={() => setIsEditable(false)}
            >
              Close
            </button>
            <button
              className="border-2 rounded-lg px-3 py-1 mt-3 border-sky-500 hover:bg-sky-500 hover:text-white"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="flex">
          <div className="basis-5/6">
            <h2 className="text-3xl mb-4">
              {`${employee.name?.first} ${employee.name?.middle} ${employee.name?.last}`}
            </h2>
            <p className="text-xl">{employee.title}</p>
            <p className="text-xl">{employee.department}</p>
            <InfoField label={"EmployeeId: "} value={employee._id} />
          </div>
          <div className="basis-1/6">
            <ButtonEmployeeEdit setIsEditable={setIsEditable} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Corporate;
