const express = require("express");
const router = express.Router();
const employeeModel = require("../../models/employee");

router.get("/", async (req, res) => {
  const allEmployees = await employeeModel.find();
  res.json(allEmployees);
});

router.post("/", async (req, res) => {
  const employeeData = req.body;
  const newEmployee = new employeeModel(employeeData);

  try {
    const mongoResponse = await newEmployee.save();
    res.json(mongoResponse);
  } catch (error) {
    console.log("error:", error);
    res.json(error);
  }
  // when adding address: {} I received an UnhandledPromiseRejectionWarning for this line
  res.json("an unexpected error occurred");
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const employee = await employeeModel.findOne({ _id: id });
  res.json(employee);
});

module.exports = router;
