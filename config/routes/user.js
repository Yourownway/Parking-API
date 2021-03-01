module.exports = (express, controllers, middlewares) => {
  const router = express.Router();

  router.route("/users").get(controllers.user.getAll);

  router.route("/user/login").post(controllers.user.login);
  router.route("/user/register").post(controllers.user.register);

  router
    .route("/user/delete")
    .delete(middlewares.auth.verifyToken, controllers.user.delete);
  router
    .route("/user/update")
    .patch(middlewares.auth.verifyToken, controllers.user.update);
  return router;
};
