module.exports = (services) => {
  const bookings_controller = {
    getAll: async (req, res) => {
      services.bookings.getAll();
    },

    create: async (req, res) => {
      let data = {
        userId: req.user.id,
        placeId: req.params.placeId,
      };
      try {
        const bookPlace = await services.bookings.create(data);
        if (bookPlace) {
          return res.status(200).json({ success: bookPlace });
        }
      } catch (err) {
        if (err.code === "ER_DUP_ENTRY")
          return res.status(400).json({
            errMessage: `error place number ${data.placeId} already book`,
          });
        return res.status(500).json(err);
      }
    },

    delete: async (req, res) => {
      let data = {
        userId: req.user.id,
        placeId: req.params.placeId,
      };
      try {
        const deletePlace = await services.bookings.delete(data);
        if (deletePlace) {
          return res.status(200).json({
            message: `You're using place number ${deletePlace[0].id} during ${deletePlace[0].rentalTime}`,
            success: deletePlace[0],
          });
        }
      } catch (err) {
        return res.status(500).json(err);
      }
    },
  };
  return bookings_controller;
};
