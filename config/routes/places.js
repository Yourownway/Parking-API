module.exports = (express, controllers, middlewares) => {
  const router = express.Router();

  // router.route("/places").get(controllers.places.getAll);
  // router.route("/place").get(controllers.places.create);

  router.route("/:floor/places").get(controllers.places.getPlacesByFloor);

  return router;
};
