import { useState } from "react";
import InfoField from "../AppUtils/InfoField";
import Input from "../AppUtils/Input";
import ButtonEdit from "../AppUtils/ButtonEdit";
import ButtonSubmit from "../AppUtils/ButtonSubmit";
import ButtonClose from "../AppUtils/ButtonClose";
import FlexCol from "../AppUtils/FlexCol";

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
        Authorization: `Bearer ${localStorage.getItem(
          "MY_PERSONNEL_ACCESS_TOKEN"
        )}`,
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
            <FlexCol>
              <Input
                value={phonePersonal}
                name={"Personal phone"}
                showLabel={true}
                onChange={(e) => setPhone1(e.target.value)}
                required={true}
              />
              <Input
                value={phoneCorporate}
                name={"Corporate phone"}
                showLabel={true}
                onChange={(e) => setPhone2(e.target.value)}
                required={true}
              />
            </FlexCol>
            <Input
              value={email}
              name={"Email"}
              showLabel={true}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
          </div>
          <FlexCol options={"basis-1/6"}>
            <ButtonClose setFunction={setIsEditable} />
            <ButtonSubmit text={"Save"} width={"w-full"} />
          </FlexCol>
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
            <ButtonEdit setIsEditable={setIsEditable} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
