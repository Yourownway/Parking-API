module.exports = (express, controllers, middlewares) => {
  const router = express.Router();

  // router.route("/places").get(controllers.places.getAll);
  // router.route("/place").get(controllers.places.create);

  // router.route("/places/:floor").post(controllers.places.getPlacesByFloor);

  return router;
};
