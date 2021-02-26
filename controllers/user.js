module.exports = (services) => {
  const user_controller = {
    getAll: async (req, res) => {
      let result = await services.user.getAll();
      res.status(200).json({ result });
    },
    register: async (req, res) => {
      const { userEmail, userPassword } = (data = req.body);
      try {
        if (!userEmail || !userPassword)
          return res
            .status(400)
            .json({ errMessage: "error missing parameters" });

        const hash = await services.bcryptPassword.hashPassword(
          data.userPassword
        );

        data.userPassword = hash;

        const email = await services.user.getByEmail(data.userEmail);

        if (email)
          return res
            .status(400)
            .json({ errMessage: `${data.userEmail} already exist` });

        const result = await services.user.register(data);
        if (result) return res.status(201).json("new user registered");
      } catch (err) {
        return res
          .status(500)
          .json({ error: err, errMessage: "500 error server" });
      }
    },
    login: async (req, res) => {
      const { userEmail, userPassword } = (data = req.body);
      try {
        if (!userEmail || !userPassword)
          res.status(400).json("missing parameters");
        else {
          const userFound = await services.user.getByEmail(userEmail);

          if (!userFound) {
            return res
              .status(401)
              .json({ message: `user ${userEmail} doesn't exist yet` });
          }

          const comparePassword = await services.bcryptPassword.comparePassword(
            userPassword,
            userFound.userPassword
          );
          console.log("userFound", comparePassword);

          if (!comparePassword) {
            return res.status(400).json({ errMessage: "Bad password" });
          }

          const isTokenCreate = await services.jwtoken.createToken(
            res,
            userFound
          );
          if (!isTokenCreate)
            return res.status(500).json({ errMessage: "error server" });
          return res.status(200).json({
            message: `Welcome to the ParkingAPI ${userFound.userEmail}`,
          });
        }
      } catch (err) {
        return res
          .status(500)
          .json({ error: err, errMessage: "500 error server" });
      }
    },
    delete: async (req, res) => {},
    update: async (req, res) => {},
  };

  return user_controller;
};
