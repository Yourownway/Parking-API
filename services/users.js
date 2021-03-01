module.exports = (repositories) => {
  const users_service = {
    getAll: async (data) => {
      return await repositories.user.getAll();
    },
    register: async (data) => {
      return await repositories.user.register(data);
    },
    getByEmail: async (email) => {
      return await repositories.user.getByEmail(email);
    },
    getById: async (id) => {
      return await repositories.user.getById(id);
    },

    update: async (id, data) => {
      return await repositories.user.update(id, data);
    },

    delete: async (data) => {
      return await repositories.user.delete(data);
    },
  };

  return users_service;
};
