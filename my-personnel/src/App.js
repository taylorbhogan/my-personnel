import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Employees from "./components/Employees";
import Employee from "./components/Employee";
import LoadingContent from "./components/LoadingContent";
import Home from "./components/Home";
import HomeLink from "./components/Navigation/HomeLink";
import LogoutButton from "./components/Auth/LogoutButton";

function App() {
  const [employees, setEmployees] = useState({});

  useEffect(() => {
    const fetchEmployees = async () => {
      const employeeObject = {};
      const res = await fetch("/api/employees", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "MY_PERSONNEL_ACCESS_TOKEN"
          )}`,
        },
      });
      const data = await res.json();
      data.forEach((employee) => {
        employeeObject[employee._id] = employee;
      });

      setEmployees(employeeObject);
    };
    fetchEmployees();
  }, []);

  return employees ? (
    <div className="App h-full">
      <BrowserRouter>
        <HomeLink />
        <LogoutButton setEmployees={setEmployees} />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/employees"
            element={
              <Employees employees={employees} setEmployees={setEmployees} />
            }
          ></Route>
          <Route
            path="/employees/:employeeId"
            element={
              <Employee employees={employees} setEmployees={setEmployees} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  ) : (
    <LoadingContent />
  );
}

export default App;
