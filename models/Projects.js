const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectCount = new Schema({
  Projects: Array,
  FirstName: String,
});

const Projects = mongoose.model("details", ProjectCount);

module.exports = Projects;
