import { useState } from "react";
import Input from "./Input";
import DropdownDepartment from "./DropdownDepartment";

const NewEmployeeForm = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [phone, setPhone] = useState("");
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
      phone,
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
      directSupervisor: "6217ccd822a75a5caca18115",
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
      console.log("newEmployeeData", newEmployeeData);
    } else {
      console.log("res", res);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Employee Form</h1>
      <Input
        type={"text"}
        value={firstName}
        placeholder={"firstName placeholder"}
        ariaLabel={"firstName placeholder"}
        onChange={(e) => setFirstName(e.target.value)}
        required={true}
      />
      <Input
        type={"text"}
        value={middleName}
        placeholder={"middleName placeholder"}
        ariaLabel={"middleName placeholder"}
        onChange={(e) => setMiddleName(e.target.value)}
        required={true}
      />
      <Input
        type={"text"}
        value={lastName}
        placeholder={"lastName placeholder"}
        ariaLabel={"lastName placeholder"}
        onChange={(e) => setLastName(e.target.value)}
        required={true}
      />
      <Input
        type={"text"}
        value={title}
        placeholder={"title placeholder"}
        ariaLabel={"title placeholder"}
        onChange={(e) => setTitle(e.target.value)}
        required={true}
      />
      <Input
        type={"text"}
        value={street1}
        placeholder={"street1 placeholder"}
        ariaLabel={"street1 placeholder"}
        onChange={(e) => setStreet1(e.target.value)}
        required={true}
      />
      <Input
        type={"text"}
        value={street2}
        placeholder={"street2 placeholder"}
        ariaLabel={"street2 placeholder"}
        onChange={(e) => setStreet2(e.target.value)}
        required={true}
      />
      <Input
        type={"text"}
        value={city}
        placeholder={"city placeholder"}
        ariaLabel={"city placeholder"}
        onChange={(e) => setCity(e.target.value)}
        required={true}
      />
      <Input
        type={"text"}
        value={state}
        placeholder={"state placeholder"}
        ariaLabel={"state placeholder"}
        onChange={(e) => setState(e.target.value)}
        required={true}
      />
      <Input
        type={"text"}
        value={zip}
        placeholder={"zip placeholder"}
        ariaLabel={"zip placeholder"}
        onChange={(e) => setZip(e.target.value)}
        required={true}
      />
      <Input
        type={"text"}
        value={country}
        placeholder={"country placeholder"}
        ariaLabel={"country placeholder"}
        onChange={(e) => setCountry(e.target.value)}
        required={true}
      />
      <DropdownDepartment
        setFunction={(department) => setDepartment(department)}
      />
      <Input
        type={"text"}
        value={phone}
        placeholder={"phone placeholder"}
        ariaLabel={"phone placeholder"}
        onChange={(e) => setPhone(e.target.value)}
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
      <input
        type={"checkbox"}
        checked={isAdmin}
        placeholder={"isAdmin placeholder"}
        aria-label={"isAdmin placeholder"}
        onChange={(e) => setIsAdmin(e.target.checked)}
        ></input>
      <input
        type={"number"}
        value={pto}
        placeholder={"pto placeholder"}
        aria-label={"pto placeholder"}
        onChange={(e) => setPto(e.target.value)}
        ></input>
      <Input
        type={"text"}
        placeholder={"taxDocument placeholder"}
        ariaLabel={"taxDocument placeholder"}
        onChange={(e) => setTaxDocument(e.target.value)}
        required={true}
        />
      <Input
        type={"text"}
        value={imgUrl}
        placeholder={"imgUrl placeholder"}
        ariaLabel={"imgUrl placeholder"}
        onChange={(e) => setImgUrl(e.target.value)}
        required={true}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewEmployeeForm;
