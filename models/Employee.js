const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Phone: Number,
  Department: String,
  Salary: Number,
  Age: Number,
  Country: String,
  DepartmentId: Number,
  Projects: Array,
  Designation: String,
});

const Employee = mongoose.model("details", EmployeeSchema);

module.exports = Employee;
