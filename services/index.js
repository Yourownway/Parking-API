// service dépendencies
const repositories = require("../repositories/index");
// bcrypt = require("bcrypt"),
// jwt = require("jsonwebtoken");

// services
const user_service = require("./user");
// bcrypt_service = require("./bcrypt"),
// jwt_service = require("./jwt");

// create a services object for map all the services
const services = {
  user: user_service(repositories),
  // bcryptPassword: bcrypt_service(bcrypt),
  // token: jwt_service(jwt),
};

// export our service object
module.exports = services;
