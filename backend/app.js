const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const employeeModel = require("./models/employee");
const departmentModel = require('./models/department')
const app = express();
const routes = require('./routes')

const { environment } = require("./config");
const isProduction = environment === "production";

app.use(cookieParser());
app.use(express.json());

if (!isProduction) {
  app.use(cors());
}

app.use(routes)

// app.get('/api/addDepartment', async (req, res) => {
//   const department = { name: "marketing"}
//   const newDepartment = new departmentModel(department)

//   try {
//     const mongoResponse = await newDepartment.save();
//     res.json(mongoResponse)
//   } catch (error) {
//     console.log("error:",error);
//     res.json(error)
//   }
// })

// export app to be started by bin
module.exports = app;
