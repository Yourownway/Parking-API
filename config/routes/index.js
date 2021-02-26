module.exports = (express, controllers) => {
  const user_route = require("./user");

  const middlewares = require("../../middlewares/index");

  const routes = [user_route(express, controllers, middlewares)];

  return routes;
};
