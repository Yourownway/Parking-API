module.exports = (services) => {
  const auth = {
    verifyToken: async (req, res, next) => {
      const token = req.cookies.token;
      try {
        if (!token) {
          return res.status(401).json("You need to Login");
        }
        const decrypt = await services.token.verifyToken(
          req.cookies.token,
          process.env.JWT_SIGN_SECRET
        );
        if (!decrypt) {
          res.status(401).json("Wrong token");
        }

        req.user = {
          id: decrypt.id,
          userEmail: decrypt.userEmail,
        };
        next();
      } catch (err) {
        return res.status(500).json(err.toString());
      }
    },
  };

  return auth;
};
