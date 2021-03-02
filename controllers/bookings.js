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
          return res
            .status(400)
            .json({
              errMessage: `error place number ${data.placeId} already book`,
            });
        return res.status(500).json(err);
      }
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
