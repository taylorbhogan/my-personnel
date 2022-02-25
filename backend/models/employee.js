const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  corporateId: Number,
  name: {
    first: String,
    middle: String,
    last: String,
  },
  title: String,
  department: String,
  admin: Boolean,
  phone: {
    personal: String,
    corporate: String,
  }, 
  email: String,
  address: {
    street1: String,
    street2: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  pto: Number,
  taxDocuments: [ String ],
  imgUrl: String,
  directSupervisor: mongoose.Schema.Types.ObjectId,
}, {
  timestamps: true
})

const employeeModel = mongoose.model('employee',employeeSchema)


module.exports = employeeModel;
