const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  test: String,
})

const employeeModel = mongoose.model('employee',employeeSchema)


module.exports = employeeModel;
