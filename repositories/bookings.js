module.exports = (db) => {
  const bookings_repository = {
    getAll: async () => {
      const [rows] = await db.promise().execute("SELECT * FROM Bookings");
      return rows[0];
    },
    create: async (idUser, idPlaces) => {
      const [rows] = await db.promise().execute(
        `INSERT INTO Bookings (userId, placeId)
        SELECT * FROM (SELECT ?,?) AS tmp
        WHERE NOT EXISTS (
            SELECT placeId FROM Bookings WHERE placeId = ?
        ) LIMIT 1;`,
        [idUser, idPlaces, idPlaces]
      );
    },
  };
  return bookings_repository;
};
