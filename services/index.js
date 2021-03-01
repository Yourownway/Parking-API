// service dépendencies
const repositories = require("../repositories/index"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken");

// services
const users_service = require("./users"),
  places_services = require("./places"),
  bookings_services = require("./bookings"),
  bcrypt_service = require("./bcrypt"),
  jwt_service = require("./jwt");

// create a services object for map all the services
const services = {
  user: users_service(repositories),
  places: places_services(repositories),
  bookings: bookings_services(repositories),
  bcryptPassword: bcrypt_service(bcrypt),
  token: jwt_service(jwt),
};

// export our service object
module.exports = services;
