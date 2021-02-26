// middlewares dépendencies
const services = require("../services/index");

// middlewares
const auth_middleware = require("./auth"),
  isAdmin_middleware = require("./isAdmin");

// create a middlewares object for map all the services
const middlewares = {
  auth: auth_middleware(services),
  isAdmin: isAdmin_middleware(services),
};

// export our middlewares object
module.exports = middlewares;
