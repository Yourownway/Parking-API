module.exports = (express, controllers, middlewares) => {
  const router = express.Router();

  // router.route("/bookings").get(controllers.bookings.getAll);

  // router.route("/booking").post(controllers.bookings.createBooking);

  // router.route("/booking").delete();

  return router;
};
