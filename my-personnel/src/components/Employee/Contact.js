import { useState } from "react";
import InfoField from "./InfoField";
import Input from "../Forms/Input";
import ButtonEmployeeEdit from "../Forms/ButtonEmployeeEdit";

const Contact = ({ employee, employees, setEmployees }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [phonePersonal, setPhone1] = useState(employee.phone?.personal);
  const [phoneCorporate, setPhone2] = useState(employee.phone?.corporate);
  const [email, setEmail] = useState(employee.email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeObject = { ...employee };
    employeeObject.email = email;
    employeeObject.phone.personal = phonePersonal;
    employeeObject.phone.corporate = phoneCorporate;

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
    <div>
      <h3 className="text-2xl pb-3">Contact</h3>
      {isEditable ? (
        <form className="flex items-center" onSubmit={handleSubmit}>
          <div className="flex basis-5/6">
            <div className="flex flex-col">
              <label>
                <span>Personal Phone:</span>
                <Input
                  type={"text"}
                  value={phonePersonal}
                  name={"Personal phone"}
                  onChange={(e) => setPhone1(e.target.value)}
                  required={true}
                />
              </label>
              <label>
                <span>Corporate Phone: </span>
                <Input
                  type={"text"}
                  value={phoneCorporate}
                  name={"Corporate phone"}
                  onChange={(e) => setPhone2(e.target.value)}
                  required={true}
                />
              </label>
            </div>
            <label>
              <span>Email: </span>
              <Input
                type={"text"}
                value={email}
                name={"Email"}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
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
          <div className="flex basis-5/6">
            <div>
              <InfoField
                label={"Corporate Phone: "}
                value={employee.phone?.corporate}
              />
              <InfoField
                label={"Personal Phone: "}
                value={employee.phone?.personal}
              />
            </div>
            <div className="pl-8">
              <InfoField label={"Email: "} value={employee.email} />
            </div>
          </div>
          <div className="basis-1/6">
            <ButtonEmployeeEdit setIsEditable={setIsEditable} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
