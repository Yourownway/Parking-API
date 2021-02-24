module.exports = (services) => {
  const user_controller = {
    getAll: async (req, res) => {
      let result = await services.user.getAll();
      res.send(result);
    },
    register: async (req, res) => {
      const email = req.body.email;
      const password = req.body.password;

      try {
        if (!email || !password) res.status(400).json("missing parameters");
        else {
          let hash = await services.cryptPassword.hashPassword(password);
          console.log(hash, "controllers");
          let result = await services.user.register([email, hash]);

          res.status(201).json("new user registered");
        }
      } catch (err) {
        res.status(400).json(err);
      }
    },
  };

  return user_controller;
};
