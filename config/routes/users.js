module.exports = (express, controllers, middlewares) => {
  const router = express.Router();

  router.route("/users").get(controllers.users.getAll);

  router.route("/user/login").post(controllers.users.login);
  router.route("/user/register").post(controllers.users.register);

  router
    .route("/user/delete")
    .delete(middlewares.auth.verifyToken, controllers.users.delete);
  router
    .route("/user/update")
    .patch(middlewares.auth.verifyToken, controllers.users.update);
  return router;
};
