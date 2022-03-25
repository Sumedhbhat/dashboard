const express = require("express");
const path = require("path");
const axios = require("axios");
const mongoose = require("mongoose");
const Employee = require("../models/Employee");

const app = express.Router();

app.get("/", (req, res) => {
  Employee.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.get("/projectCount", (req, res) => {
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

app.get("/deptCount", (req, res) => {
  let count = {};
  Employee.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data.forEach((d) => {
        number = d.Department;
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

app.get("/salary", (req, res) => {
  let count = {};
  Employee.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data.forEach((d) => {
        number = d.Salary;
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

app.get("/countryCount", (req, res) => {
  let count = {};
  Employee.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data.forEach((d) => {
        number = d.Country;
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

app.get("/ageCount", (req, res) => {
  let count = {};
  Employee.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data.forEach((d) => {
        number = d.Age;
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

app.post("/addEmployee", (req, res) => {
  data = req.params.data;
  Employee.insertMany(data)
    .then((d) => res.json(d))
    .catch((err) => console.log(err));
});

module.exports = app;
