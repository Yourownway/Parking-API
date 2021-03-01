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
    getById: async (id) => {
      return repositories.user.getById(id);
    },

    update: async (id, data) => {
      return repositories.user.update(id, data);
    },

    delete: async (data) => {
      return repositories.user.delete(data);
    },
  };

  return user_service;
};
