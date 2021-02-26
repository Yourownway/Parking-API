// middlewares dépendencies
const services = require("../services/index");

// middlewares
const auth_middleware = require("./auth");

// create a middlewares object for map all the services
const middlewares = {
  auth: auth_middleware(services),
};

// export our middlewares object
module.exports = middlewares;
