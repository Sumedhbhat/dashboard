const mongoose = require("mongoose");
const Employee = require("../models/Employee");
const app = require("express").Router();

app.get("/", async (req, res) => {
  let count = {};
  Employee.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data.forEach((d) => {
        number = d.Projects.length;
        if (count[number] === undefined) {
          count[number] = 1;
        } else {
          count[number]++;
        }
      });
      res.json(count);
    }
  });
});

module.exports = app;
