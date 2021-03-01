module.exports = (express, controllers) => {
  const users_route = require("./users"),
    places_route = require("./places"),
    bookings_route = require("./bookings");

  const middlewares = require("../../middlewares/index");

  const routes = [
    users_route(express, controllers, middlewares),
    places_route(express, controllers, middlewares),
    bookings_route(express, controllers, middlewares),
  ];

  return routes;
};
