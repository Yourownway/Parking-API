module.exports = (jwt) => {
  const jwt_service = {
    generate: async (data) => {
      const token = await jwt.sign();
      return token;
    },
  };

  return jwt_service;
};
