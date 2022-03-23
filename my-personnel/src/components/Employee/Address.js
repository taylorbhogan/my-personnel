import { useState } from "react";
import ButtonEmployeeEdit from "../Forms/ButtonEmployeeEdit";
import Input from "../Forms/Input";
import InfoField from "./InfoField";

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
      <h3 className="text-2xl pb-3">Address</h3>
      {isEditable ? (
        <form onSubmit={handleSubmit} className="flex">
          <div className="flex flex-col basis-5/6">
            <label>
              <span>Street Address:</span>
              <Input
                type={"text"}
                value={street1}
                name={"Street Address"}
                onChange={(e) => setStreet1(e.target.value)}
                required={true}
              />
            </label>
            <label>
              <span>Apt/Suite/Other:</span>
              <Input
                type={"text"}
                value={street2}
                name={"Apt/Suite/Other"}
                onChange={(e) => setStreet2(e.target.value)}
                required={true}
              />
            </label>
            <div>
              <label>
                <span>City:</span>
                <Input
                  type={"text"}
                  value={city}
                  name={"City"}
                  onChange={(e) => setCity(e.target.value)}
                  required={true}
                />
              </label>
              <label>
                <span>State:</span>
                <Input
                  type={"text"}
                  value={state}
                  name={"State"}
                  onChange={(e) => setState(e.target.value)}
                  required={true}
                />
              </label>
            </div>
            <label>
              <span>Zip:</span>
              <Input
                type={"text"}
                value={zip}
                name={"ZIP Code"}
                onChange={(e) => setZip(e.target.value)}
                required={true}
              />
            </label>
            <label>
              <span>Country:</span>
              <Input
                type={"text"}
                value={country}
                name={"Country"}
                onChange={(e) => setCountry(e.target.value)}
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
          <div className="basis-1/6">
            <ButtonEmployeeEdit setIsEditable={setIsEditable} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Address;
