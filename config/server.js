// server dépendencies
const express = require("express"),
  morgan = require("morgan"),
  cors = require("cors"),
  cookieParser = require("cookie-parser");

// server routes/controllers
const controllers = require("../controllers/index"),
  routes = require("./routes/index");

const app = express();

app.use(express.json());

app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(routes(express, controllers));
module.exports = app;
