module.exports = (repositories) => {
  const users_service = {
    getAll: async (data) => {
      return await repositories.users.getAll();
    },
    register: async (data) => {
      return await repositories.users.register(data);
    },
    getByEmail: async (email) => {
      return await repositories.users.getByEmail(email);
    },
    getById: async (id) => {
      return await repositories.users.getById(id);
    },

    update: async (id, data) => {
      return await repositories.users.update(id, data);
    },

    delete: async (data) => {
      return await repositories.users.delete(data);
    },
  };

  return users_service;
};
