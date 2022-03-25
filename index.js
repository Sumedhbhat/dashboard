const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Employee = require("./routes/getEmployees");
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build", "index")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI);

const connect = mongoose.connection;

connect.once("open", () => {
  console.log("connection established");
});

app.use("/api/", Employee);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Started at port " + PORT);
});
