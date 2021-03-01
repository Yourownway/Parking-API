module.exports = (services) => {
  const places_controller = {
    create: async (req, res) => {
      let data = req.body;
      if (!data.floor) {
        return res.status(400).json({ errMessage: "error missing parameters" });
      }
      const create = await services.places.create(data);
    },
  };
};
