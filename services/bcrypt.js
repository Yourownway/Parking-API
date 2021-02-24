module.exports = (bcrypt) => {
  const bcrypt_service = {
    hashPassword: async (data) => {
      const hash = await bcrypt.hash(data, 10);
      return hash;
    },
    comparePassword: async (data, hash) => {
      const compare = bcrypt.compare(data, hash);
      return compare;
    },
  };

  return bcrypt_service;
};
