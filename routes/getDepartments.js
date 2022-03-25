const app = require("express").Router();
const Employee = require("../models/Employee");

app.get("/", (req, res) => {
  Employee.find({}, (err, data) => {});
});
