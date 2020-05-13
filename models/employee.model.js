const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  project: { type: String },
  skill: { type: String }
});

// Export the model
module.exports = mongoose.model("Employees", EmployeeSchema);
