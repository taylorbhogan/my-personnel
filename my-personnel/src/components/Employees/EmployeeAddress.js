import { useState } from "react";
import ButtonEdit from "../AppUtils/ButtonEdit";
import ButtonSubmit from "../AppUtils/ButtonSubmit";
import ButtonClose from "../AppUtils/ButtonClose";
import Input from "../AppUtils/Input";
import InfoField from "../AppUtils/InfoField";
import FlexCol from "../AppUtils/FlexCol";
import InputBundler from "../AppUtils/InputBundler";

const Address = ({ employee, employees, setEmployees }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [street1, setStreet1] = useState(employee.address?.street1);
  const [street2, setStreet2] = useState(employee.address?.street2);
  const [city, setCity] = useState(employee.address?.city);
  const [state, setState] = useState(employee.address?.state);
  const [zip, setZip] = useState(employee.address?.zip);
  const [country, setCountry] = useState(employee.address?.country);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeObject = { ...employee };
    employeeObject.address.street1 = street1;
    employeeObject.address.street2 = street2;
    employeeObject.address.city = city;
    employeeObject.address.state = state;
    employeeObject.address.zip = zip;
    employeeObject.address.country = country;

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
    <div className="">
      <h3 className="text-2xl pb-3">Address</h3>
      {isEditable ? (
        <form onSubmit={handleSubmit} className="flex">
          <FlexCol options={"basis-5/6"}>
            <Input
              value={street1}
              name={"Street Address"}
              showLabel={true}
              onChange={(e) => setStreet1(e.target.value)}
              required={true}
            />
            <Input
              value={street2}
              name={"Apt/Suite/Other"}
              showLabel={true}
              onChange={(e) => setStreet2(e.target.value)}
              required={true}
            />
            <InputBundler>
              <FlexCol options={"basis-full"}>
                <Input
                  value={city}
                  name={"City"}
                  showLabel={true}
                  onChange={(e) => setCity(e.target.value)}
                  required={true}
                />
              </FlexCol>
              <FlexCol options={"basis-full"}>
                <Input
                  value={state}
                  name={"State"}
                  showLabel={true}
                  onChange={(e) => setState(e.target.value)}
                  required={true}
                />
              </FlexCol>
            </InputBundler>
            <InputBundler>
              <FlexCol options={"basis-full"}>
                <Input
                  value={zip}
                  name={"ZIP Code"}
                  showLabel={true}
                  onChange={(e) => setZip(e.target.value)}
                  required={true}
                />
              </FlexCol>
              <FlexCol options={"basis-full"}>
                <Input
                  value={country}
                  name={"Country"}
                  showLabel={true}
                  onChange={(e) => setCountry(e.target.value)}
                  required={true}
                />
              </FlexCol>
            </InputBundler>
          </FlexCol>
          <FlexCol options={"basis-1/6"}>
            <ButtonClose setFunction={setIsEditable} />
            <ButtonSubmit text={"Save"} width={"w-full"} />
          </FlexCol>
        </form>
      ) : (
        <div className="flex">
          <div className="basis-5/6">
            <InfoField
              label={"Street Address: "}
              value={employee.address?.street1}
            />
            <InfoField
              label={"Apt/Suite/Other: "}
              value={employee.address?.street2}
            />
            <div className="flex">
              <InfoField label={"City: "} value={employee.address?.city} />
              <InfoField
                label={"State: "}
                value={employee.address?.state}
                labelOptions={"ml-2"}
              />
              <InfoField
                label={"ZIP Code: "}
                value={employee.address?.zip}
                labelOptions={"ml-2"}
              />
              <InfoField
                label={"Country: "}
                value={employee.address?.country}
                labelOptions={"ml-2"}
              />
            </div>
          </div>
          <FlexCol options={"basis-1/6"}>
            <ButtonEdit setIsEditable={setIsEditable} />
          </FlexCol>
        </div>
      )}
    </div>
  );
};

export default Address;
