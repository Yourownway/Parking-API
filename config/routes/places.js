module.exports = (express, controllers, middlewares) => {
  const router = express.Router();

  router
    .route("/place")
    .post(middlewares.auth.verifyToken, controllers.places.create);

  router.route("/:floor/places").get(controllers.places.getPlacesByFloor);

  return router;
};
