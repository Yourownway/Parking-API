// server dépendencies
const express = require("express"),
  bodyParser = require("body-parser");

// server routes/controllers
const controllers = require("../controllers/index"),
  routes = require("./routes/index");

const app = express();
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());
app.use(routes(express, controllers));

module.exports = app;
