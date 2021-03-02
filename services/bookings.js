module.exports = (repositories) => {
  const bookings_service = {
    getAll: async () => {
      return await repositories.bookings.getAll;
    },

    create: async (data) => {
      return await repositories.bookings.create(data);
    },

    delete: async (data) => {
      return await repositories.bookings.delete(data);
    },
  };
  return bookings_service;
};
