// controllers dépendencies
const services = require("../services/index");

// controllers
const users_controller = require("./users"),
  places_controller = require("./places"),
  bookings_controller = require("./bookings");

// create a controllers object for map all the controllers
const controllers = {
  users: users_controller(services),
  places: places_controller(services),
  bookings: bookings_controller(services),
};

// export our controllers object
module.exports = controllers;
