module.exports = (repositories) => {
  const user_service = {
    getAll: async (data) => {
      return repositories.user.getAll();
    },
    register: async (data) => {
      return repositories.user.register(data);
    },
    getByEmail: async (email) => {
      return repositories.user.getByEmail(email);
    },
    // login: async (data) => {
    //   return repositories.user.login(data);
    // },
    // getById: async (id) => {
    //   const rows = await repositories.user.getById(id);
    //   return rows[0];
    // },
  };

  return user_service;
};
