import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Employees from "./components/Employees";
import Employee from "./components/Employee";
import LoadingContent from "./components/LoadingContent";
import Home from "./components/Home";
import NavBar from "./components/Navigation/NavBar";

function App() {
  const [employees, setEmployees] = useState({});

  return employees ? (
    <div className="h-full">
      <BrowserRouter>
        <NavBar setEmployees={setEmployees} />
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
