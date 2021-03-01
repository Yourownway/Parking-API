module.exports = (bcrypt) => {
  const bcrypt_service = {
    hashPassword: async (password) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      return hashedPassword;
    },
    comparePassword: async (password, hash) => {
      const compare = await bcrypt.compare(password, hash);

      return compare;
    },
  };
  return bcrypt_service;
};
