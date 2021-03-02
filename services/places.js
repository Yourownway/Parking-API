module.exports = (repositories) => {
  const places_service = {
    create: async () => {
      return await repositories.places.create();
    },
    getPlacesByFloor: async (floor) => {
      return await repositories.places.getPlacesByFloor(floor);
    },
  };
  return places_service;
};
