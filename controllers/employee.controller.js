const Employee = require("../models/employee.model");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.employee_create = function(req, res) {
  let employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    project: req.body.project,
    skill: req.body.skill
  });

  employee.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Employee Created successfully");
  });
};
exports.employee_details = function(req, res) {
  Employee.findById(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

exports.employees_list = function(req, res) {
  Employee.find({}, function(err, product) {
    if (err) return next(err);
    res.send(product);
  });
};
