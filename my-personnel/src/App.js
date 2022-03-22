import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Employees from "./components/Employees";
import Employee from "./components/Employee";
import LoadingContent from "./components/AppUtils/LoadingContent";
import Home from "./components/Home";
import NavBar from "./components/Navigation/NavBar";

function App() {
  const [employees, setEmployees] = useState({});

  return employees ? (
    <div className="h-full">
      <NavBar setEmployees={setEmployees} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
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
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        ></Route>
      </Routes>
    </div>
  ) : (
    <LoadingContent />
  );
}

export default App;
