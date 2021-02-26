module.exports = (services) => {
  const auth = {
    verifyIsAdmin: async (req, res, next) => {
      const { userEmail, userPassword } = req.body;
      try {
        const userFound = await services.user.getByEmail(userEmail);
        if (!userFound) {
          return res
            .status(401)
            .json({ errMessage: `cannot find ${userEmail} in Database ` });
        }
        const comparePassword = await services.bcryptPassword.comparePassword(
          userPassword,
          userFound.userPassword
        );
        if (!comparePassword) {
          return res.status(400).json({ errMessage: "Bad password" });
        }
        if (!userFound.isAmin) {
          return res.status(400).json({ errMessage: "You are not admin" });
        }
        next();
      } catch (err) {
        return res
          .status(500)
          .json({ error: err, errMessage: "500 error server" });
      }
    },
  };

  return auth;
};
