module.exports = (express, controllers, middlewares) => {
  const router = express.Router();

  router.route("/bookings").get(controllers.bookings.getAll);

  router
    .route("/:placeId/booking")
    .get(middlewares.auth.verifyToken, controllers.bookings.create);

  router
    .route("/booking")
    .delete(middlewares.auth.verifyToken, controllers.bookings.delete);

  return router;
};
