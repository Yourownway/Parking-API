module.exports = (services) => {
  const places_controller = {
    create: async (req, res) => {
      let data = req.body;
      if (!data.floor) {
        return res.status(400).json({ errMessage: "error missing parameters" });
      }
      const create = await services.places.create(data);
      if (create) {
        return res.status(200).json({ success: "new place created" });
      }
    },
    getPlacesByFloor: async (req, res) => {
      let { floor } = req.params;

      const getPlaces = await services.places.getPlacesByFloor(floor);

      if (!getPlaces) {
        return res
          .status(400)
          .json({ errMessage: "error no parking places on this floor" });
      }
      return res.status(200).json({ success: getPlaces });
    },
  };
  return places_controller;
};
