module.exports = (services) => {
  const auth = {
    verifyToken: async (req, res, next) => {
      const token = req.cookies.token || "";
      try {
        if (!token) {
          return res.status(401).json("You need to Login");
        }
        const decrypt = await services.jwt.verifyToken(
          token,
          process.env.JWT_SIGN_SECRET
        );
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
