module.exports = (jwt) => {
  const token_service = {
    createToken: async (res, data) => {
      const secretKey = process.env.JWT_SIGN_SECRET;

      const token = jwt.sign(
        {
          userEmail: data.userEmail,
          id: data.id,
        },
        secretKey,
        {
          expiresIn: "24h",
        }
      );

      res.cookie("token", token, {
        maxAge: 3600000,
        secure: false,
        httpOnly: true,
      });
      return true;
    },
    verifyToken: async (token, secretKey) => {
      console.log("token2");
      const decrypt = await jwt.verify(token, secretKey);
      return decrypt;
    },
  };
  return token_service;
};
