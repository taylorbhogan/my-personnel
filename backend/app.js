const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const employeeModel = require("./models/employee");
const app = express();

const { environment } = require("./config");
const isProduction = environment === "production";

app.use(cookieParser());
app.use(express.json());

if (!isProduction) {
  app.use(cors());
}

app.get("/api/", async (req, res) => {
  const allEmployees = await employeeModel.find();
  console.log("allEmployees", allEmployees);
  res.json(allEmployees)
});

app.get("/api/addEmployee", async (req, res) => {
  const newEmployee = new employeeModel();
  newEmployee.test = "big success";

  try {
    await newEmployee.save();
  } catch (error) {
    console.log("error:", error);
  }

  res.json("added new employee");
});

// export app to be started by bin
module.exports = app;
