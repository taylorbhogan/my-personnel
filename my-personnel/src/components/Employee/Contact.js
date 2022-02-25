import { useEffect, useState } from "react";
import InfoField from "./InfoField";
import Input from "../Forms/Input";
import ButtonEmployeeEdit from "../Forms/ButtonEmployeeEdit";

const Contact = ({ employee, employees, setEmployees }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [phonePersonal, setPhone1] = useState(employee.phone.personal);
  const [phoneCorporate, setPhone2] = useState(employee.phone.corporate);
  const [email, setEmail] = useState(employee.email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEmployeeData = {
      phone: {
        personal: phonePersonal,
        corporate: phoneCorporate,
      },
      email,
    };

    const res = await fetch(`/api/employees/${employee._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployeeData),
    });
    if (res.ok) {
      const newEmployeeData = await res.json();

      const employeeObject = {...employees}
      employeeObject[employee._id] = newEmployeeData

      setEmployees(employeeObject)
      setIsEditable(false)


    } else {
      console.log("res", res);
    }
  };

  return (
    <div className="flex">
      <div className="basis-3/6">
        <h3 className="text-2xl pb-3">Contact</h3>
        {isEditable ? (
          <form onSubmit={handleSubmit}>
            <Input
              type={"text"}
              value={phonePersonal}
              placeholder={"phonePersonal placeholder"}
              ariaLabel={"phonePersonal placeholder"}
              onChange={(e) => setPhone1(e.target.value)}
              required={true}
            />
            <Input
              type={"text"}
              value={phoneCorporate}
              placeholder={"phoneCorporate placeholder"}
              ariaLabel={"phoneCorporate placeholder"}
              onChange={(e) => setPhone2(e.target.value)}
              required={true}
            />
            <Input
              type={"text"}
              value={email}
              placeholder={"email placeholder"}
              ariaLabel={"email placeholder"}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <button type="submit">Save</button>
          </form>
        ) : (
          <div className="flex">
            <div>
              <InfoField
                label={"Corporate Phone: "}
                value={employee.phone.corporate}
              />
              <InfoField
                label={"Personal Phone: "}
                value={employee.phone.personal}
              />
            </div>
            <div className="pl-2">
              <InfoField label={"Email: "} value={employee.email} />
            </div>
            <ButtonEmployeeEdit setIsEditable={setIsEditable} />
          </div>
        )}
      </div>
      <div className="basis-3/6">
        {/* {isEditable ? (
          <button type="submit">Save</button>
        ) : (
          <ButtonEmployeeEdit setIsEditable={setIsEditable} />
        )} */}
      </div>
    </div>
  );
};

export default Contact;
