const { compare } = require("bcrypt");

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

        const result = await services.user.register(data);
        if (!result) {
          console.log("tutu");
        }
        console.log(result, "ici");
        if (result) return res.status(201).json("new user registered");
      } catch (err) {
        if (err.code === "ER_DUP_ENTRY") {
          res
            .status(400)
            .json({ errMessage: `${data.userEmail} already exist` });
        }
        console.log(err);
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

          if (!comparePassword) {
            return res.status(400).json({ errMessage: "Bad password" });
          }

          const isTokenCreate = await services.token.createToken(
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
    delete: async (req, res) => {
      const userId = req.user.id;

      try {
        const deleteUser = await services.user.delete(userId);
        console.log(deleteUser, "controller delete");
        if (deleteUser.affectedRows === 1) {
          res
            .status(200)
            .json({ message: `user ${req.user.userEmail} is deleted` });
        } else {
          res.status(400).json({
            errMessage: `user ${req.user.userEmail} is already deleted`,
          });
        }
      } catch (err) {
        return res
          .status(500)
          .json({ error: err, errMessage: "500 error server" });
      }
    },
    update: async (req, res) => {
      const userId = req.user.id;
      const data = req.body;

      try {
        const userFound = await services.user.getById(userId);

        const comparePassword = await services.bcryptPassword.comparePassword(
          data.userPassword,
          userFound.userPassword
        );

        if (!comparePassword) {
          const hash = await services.bcryptPassword.hashPassword(
            data.userPassword
          );

          data.userPassword = hash;
        } else {
          data.userPassword = userFound.userPassword;
        }

        const updateUser = await services.user.update(userId, data);

        if (updateUser.changedRows > 0) {
          res.status(200).json({ message: `user is updated` });
        } else {
          res.status(400).json({
            errMessage: `user ${req.user.userEmail} is already updated`,
          });
        }
      } catch (err) {
        return res
          .status(500)
          .json({ error: err, errMessage: "500 error server" });
      }
    },
  };

  return user_controller;
};
