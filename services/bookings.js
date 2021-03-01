module.exports = (repositories) => {
  const bookings_service = {
    create: async () => {
      return await repositories.bookings.create;
    },
  };
  return bookings_service;
};
