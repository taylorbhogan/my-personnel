import React, {useEffect, useState} from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Employees from "./components/Employees";
import Employee from "./components/Employee";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState({});

  useEffect(() => {
    const fetchEmployees = async () => {
      const employeeObject = {};
      const res = await fetch("/api/");
      const data = await res.json();
      data.forEach(employee => {
        employeeObject[employee._id] = employee;
      });

      setEmployees(employeeObject);
    };
    fetchEmployees();
  },[]);

  return (
      <div className="App">
        <h1>My Personnel App</h1>
        <BrowserRouter>
          <Routes>
            <Route exact path="/employees" element={<Employees employees={employees}/>}></Route>
            <Route path="/employees/:employeeId" element={<Employee employees={employees}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
