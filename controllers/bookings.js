module.exports = (services) => {
  const bookings_controller = {
    getAll: async (req, res) => {
      services.bookings.getAll();
    },

    create: async (req, res) => {
      let { placeId } = req.params;

      const bookPlace = await services.bookings.create({
        userId: req.user.id,
        placeId: placeId,
      });
      console.log(bookPlace);
    },

    delete: async (req, res) => {
      let { userId } = req.user.id;
      let { placeId } = req.params;
      const deletePlace = await services.bookings.delete({ userId, placeId });
      console.log(deletePlace);
    },
  };
  return bookings_controller;
};
