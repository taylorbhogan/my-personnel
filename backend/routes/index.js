const express = require("express");
const router = express.Router();

const departmentRouter = require('./api/departments')
const employeeRouter = require('./api/employees')

router.use("/api/departments", departmentRouter);
router.use("/api/employees", employeeRouter);


module.exports = router;
