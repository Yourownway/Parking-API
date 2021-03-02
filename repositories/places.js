module.exports = (db) => {
  const places_repository = {
    getAll: async () => {
      const [rows] = await db.promise().execute("SELECT * FROM Places");
      return rows[0];
    },
    getPlacesByFloor: async (floor) => {
      const [
        rows,
        fields,
      ] = await db
        .promise()
        .execute(
          "SELECT id, isAvailable, floor FROM Places WHERE floor = ? AND isAvailable = true",
          [floor]
        );

      return rows;
    },
    update: async (data) => {
      const [
        rows,
      ] = await db
        .promise()
        .execute("UPDATE Places SET isAvailable = 1  WHERE id = ?", [
          data.placeId,
        ]);

      return rows;
    },
  };
  return places_repository;
};
