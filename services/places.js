module.exports = (repositories) => {
  const places_service = {
    create: async () => {
      return await repositories.places.create();
    },
  };
};
