// Repositories dépendencies
const db = require("../config/db/config");
// const models = require("../db/models/index");
// Repositories
const users_repository = require("./users"),
  places_repository = require("./places"),
  bookings_repository = require("./bookings");

// create a repositories object for map all the repositories
const repositories = {
  users: users_repository(db),
  places: places_repository(db),
  bookings: bookings_repository(db),
};

// export our repositories object
module.exports = repositories;
