import { useState } from "react";
import { GrClose } from "react-icons/gr";

import Input from "./Input";
import DropdownDepartment from "./DropdownDepartment";

const NewEmployeeForm = ({ employees, setEmployees, setShowModal }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [phonePersonal, setPhone1] = useState("");
  const [phoneCorporate, setPhone2] = useState("");
  const [email, setEmail] = useState("");
  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [pto, setPto] = useState(0);
  const [taxDocument, setTaxDocument] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = {
      corporateId: 2,
      name: {
        first: firstName,
        middle: middleName,
        last: lastName,
      },
      title,
      department,
      admin: isAdmin,
      phone: {
        personal: phonePersonal,
        corporate: phoneCorporate,
      },
      email,
      address: {
        street1,
        street2,
        city,
        state,
        zip,
        country,
      },
      pto,
      taxDocuments: [taxDocument],
      imgUrl,
      directSupervisor: "62183672fe76c4271819c360",
    };

    const res = await fetch("/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    });
    if (res.ok) {
      const newEmployeeData = await res.json();

      const employeesObject = { ...employees };
      employeesObject[newEmployeeData._id] = newEmployeeData;

      setEmployees(employeesObject);

      setShowModal(false);

      console.log("newEmployeeData", newEmployeeData);
    } else {
      console.log("res", res);
    }
  };

  return (
    <form
      className="container flex flex-col mx-auto p-6 border-4 border-sky-500 bg-white rounded-lg overflow-auto h-8vh"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl">Create a New Employee Record</h1>
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-0 right-0 m-4"
      >
        <GrClose />
      </button>
      <div className="mt-4 bg-sky-100 rounded-lg p-4">
        <h2>Personal Info</h2>
        <div>
          <Input
            type={"text"}
            value={firstName}
            placeholder={"First Name"}
            ariaLabel={"First Name"}
            onChange={(e) => setFirstName(e.target.value)}
            required={true}
            autoFocus={true}
          />
          <Input
            type={"text"}
            value={middleName}
            placeholder={"Middle Name"}
            ariaLabel={"Middle Name"}
            onChange={(e) => setMiddleName(e.target.value)}
            required={true}
          />
          <Input
            type={"text"}
            value={lastName}
            placeholder={"Last Name"}
            ariaLabel={"Last Name"}
            onChange={(e) => setLastName(e.target.value)}
            required={true}
          />
        </div>
        <Input
          type={"text"}
          value={imgUrl}
          placeholder={"Headshot url"}
          ariaLabel={"Headshot url"}
          onChange={(e) => setImgUrl(e.target.value)}
          required={true}
        />
      </div>
      <div className="mt-4 bg-sky-100 rounded-lg p-4">
        <h2>Company Info</h2>
        <div>
          <Input
            type={"text"}
            value={title}
            placeholder={"Title"}
            ariaLabel={"Title"}
            onChange={(e) => setTitle(e.target.value)}
            required={true}
          />
          <DropdownDepartment
            setFunction={(department) => setDepartment(department)}
          />
        </div>
        <div>
          <label className="m-4">
            <span>Admin: </span>
            <input
              type={"checkbox"}
              checked={isAdmin}
              placeholder={"isAdmin placeholder"}
              aria-label={"isAdmin placeholder"}
              onChange={(e) => setIsAdmin(e.target.checked)}
              className="m-2"
            ></input>
          </label>
          <label className="m-4">
            <span>PTO Hours:</span>
            <input
              type={"number"}
              value={pto}
              placeholder={"pto placeholder"}
              aria-label={"pto placeholder"}
              onChange={(e) => setPto(e.target.value)}
              className="m-2 py-1 px-2 leading-10"
            ></input>
          </label>
        </div>
      </div>
      <div className="mt-4 bg-sky-100 rounded-lg p-4">
        <h2>Address Info</h2>

        <Input
          type={"text"}
          value={street1}
          placeholder={"Street Address"}
          ariaLabel={"Street Address"}
          onChange={(e) => setStreet1(e.target.value)}
          required={true}
        />
        <Input
          type={"text"}
          value={street2}
          placeholder={"Apt/Suite/Other"}
          ariaLabel={"Apt/Suite/Other"}
          onChange={(e) => setStreet2(e.target.value)}
          required={true}
        />
        <Input
          type={"text"}
          value={city}
          placeholder={"City"}
          ariaLabel={"City"}
          onChange={(e) => setCity(e.target.value)}
          required={true}
        />
        <Input
          type={"text"}
          value={state}
          placeholder={"State"}
          ariaLabel={"State"}
          onChange={(e) => setState(e.target.value)}
          required={true}
        />
        <Input
          type={"text"}
          value={zip}
          placeholder={"ZIP Code"}
          ariaLabel={"ZIP Code"}
          onChange={(e) => setZip(e.target.value)}
          required={true}
        />
        <Input
          type={"text"}
          value={country}
          placeholder={"Country"}
          ariaLabel={"Country"}
          onChange={(e) => setCountry(e.target.value)}
          required={true}
        />
      </div>
      <div className="mt-4 bg-sky-100 rounded-lg p-4">
        <h2>Contact Info</h2>
        <Input
          type={"text"}
          value={phonePersonal}
          placeholder={"Personal Phone"}
          ariaLabel={"Personal Phone"}
          onChange={(e) => setPhone1(e.target.value)}
          required={true}
        />
        <Input
          type={"text"}
          value={phoneCorporate}
          placeholder={"Corporate Phone"}
          ariaLabel={"Corporate Phone"}
          onChange={(e) => setPhone2(e.target.value)}
          required={true}
        />
        <Input
          type={"text"}
          value={email}
          placeholder={"Email"}
          ariaLabel={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
      </div>
      <div className="mt-4 bg-sky-100 rounded-lg p-4">
        <h2>Tax Documents</h2>
        <Input
          type={"text"}
          placeholder={"Tax Document url"}
          ariaLabel={"Tax Document url"}
          onChange={(e) => setTaxDocument(e.target.value)}
          required={true}
        />
      </div>
      <div className="flex justify-center my-6">
        <button
          className="border-2 rounded-lg px-3 py-1 border-sky-500 hover:bg-sky-500 hover:text-white w-1/2"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewEmployeeForm;
