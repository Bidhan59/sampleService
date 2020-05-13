const express = require("express");
const bodyParser = require("body-parser"); // initialize our express app
const app = express();
const product = require("./routes/employee.route");
let port = 5002;

// Set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url = "mongodb://localhost:27017/britannia";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/employees", product);
app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
