module.exports = (services) => {
  const user_controller = {
    getAll: async (req, res) => {
      let result = await services.user.getAll();
      res.send(result);
    },
    register: async (req, res) => {
      const { email, password, role } = req.body;

      try {
        if (!email || !password) res.status(400).json("missing parameters");
        else {
          let hash = await services.bcryptPassword.hashPassword(password);
          console.log(hash, "controllers");
          let result = await services.user.register([email, hash, role]);

          res.status(201).json("new user registered");
        }
      } catch (err) {
        res.status(400).json(err);
      }
    },
    login: async (req, res) => {
      const { email, password } = req.body;
      try {
        if (!email || !password) res.status(400).json("missing parameters");
        else {
          let result = await services.user.getByEmail([email]);
          if (!result) res.status(400).json("user doesn't exsist yet");
          let compare = await services.bcryptPassword.comparePassword(password);

          if (!compare) res.status(400).json("wrong password");
          let token = await services.token.generate();
          if (!token) res.status(500).json("server error");

          res.status(201).json("new user registered");
        }
      } catch (err) {
        res.status(400).json(err);
      }
    },
  };

  return user_controller;
};
