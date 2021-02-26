module.exports = (express, controllers) => {
  const router = express.Router();

  router.route("/users").get(controllers.user.getAll);

  router.route("/user/login").post(controllers.user.login);
  router.route("/user/register").post(controllers.user.register);

  // router
  //   .route("/:id/user")
  //   .patch(controllers.user.update)
  //   .delete(controllers.user.delete);

  return router;
};
