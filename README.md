# MyPersonnel App

## About

Use this application to manage an employee database. You can easily view all employee records, view an individual employee record in greater detail, edit an employee record, or delete an employee record from your browser.

The React frontend queries the backend Express server for the data necessary to render a user's chosen view, and manages UI via React Hooks, Tailwind CSS, and React Icons. The Express server uses the Mongoose ORM to query and manipulate data within the MongoDB database.

## Technologies
- React.js
- Tailwind CSS
- JavaScript
- Express
- MongoDB
- Mongoose
- React-Icons

## Developing
What you’ll need on your machine:

- Node.js

1. `git clone` this repo.
2. `cd` into your local repo.
3. `cd` into `backend` and run `npm install`.
4. Create your own `.env` file based on the provided `.env.example`.
5. Create a user and database in your MongoDB that matches your `.env` configuration.
6. Run `npm start`.
7. Open a second terminal.
8. `cd` into `my-personnel`.
9. Run `npm install`.
10. Run `npm start`.
11. Your app should open in your default browser.

## API documentation

`GET /api/employees` <br>
Returns all employees
- Stretch goal: implement pagination to reduce data size

`POST /api/employees` <br>
Returns the newly created employee object if the user has provided all of the information required to create a new employee account.

`PUT /api/employees/<int:employee_id>` <br>
Returns the newly edited employee object if the user has provided all of the information required to create a new employee account.

`DELETE /api/employees/<int:employee_id>` <br>
Returns all employees if the specified employee account was successfully deleted.

## Frontend Routes
`/` <br>
Renders the home page

`/employees` <br>
Renders all employees

`/employees/employee_id` <br>
Renders the employee matching this id

## Database Schema

### Departments

- _id: (primaryKey) ObjectId
- name: string

### Employees
- _id: (primaryKey) ObjectId
- corporateId: number
- name:
  - first: string
  - second: string
  - third: string
- title: string
- department: string
- admin: boolean
- phone:
  - personal: string
  - corporate: string
- email: string
- address:
  - street1: string
  - street2: string
  - city: string
  - state: string
  - zip: string
  - country: string
- pto: number
- taxDocuments: array
- imgUrl: string,
- directSupervisor: (foreignKey) ObjectId
