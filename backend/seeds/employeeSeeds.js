const faker = require('faker')

const seedEmployeeData = () => {
  const employee = {
    corporateId: Number,
    name: {
      first: String,
      middle: String,
      last: String,
    },
    title: String,
    department: String,
    admin: Boolean,
    phone: String,
    email: String,
    address: {
      street1: faker.address.streetAddress(),
      street2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      country: faker.address.country(),
    },
    pto: faker.datatype.number({min:10,max:60}),
    taxDocuments: [ String ],
    imgUrl: faker.image.avatar(),
    directSupervisor: '6218213f4c061098e3013074',
  }
}

// call this function, then run this module in node
