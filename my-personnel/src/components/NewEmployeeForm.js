import { useState } from "react";
import Input from "./Input";

const NewEmployeeForm = () => {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = {
      name,
      title,
      address: {street: "123 Main St"}
    }

    const res = await fetch('/api/addEmployee', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(newEmployee)
    })
    if (res.ok){
      const newEmployeeData = await res.json();
      console.log('newEmployeeData',newEmployeeData);
    } else {
      console.log('res',res);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Employee Form</h1>
      <Input
        type={"text"}
        value={name}
        placeholder={"name placeholder"}
        ariaLabel={"name placeholder"}
        onChange={(e) => setName(e.target.value)}
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
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default NewEmployeeForm;
