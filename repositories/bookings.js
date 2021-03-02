module.exports = (db) => {
  const bookings_repository = {
    getAll: async () => {
      const [rows] = await db.promise().execute("SELECT * FROM Bookings");
      return rows[0];
    },
    create: async (data) => {
      const [rows] = await db
        .promise()
        .execute("CALL book_places (?,?);", [data.userId, data.placeId]);

      return rows[0];
    },
    delete: async (data) => {
      const [rows] = await db
        .promise()
        .execute("CALL remove_book (?);", [data.placeId]);

      return rows[0];
    },
  };
  return bookings_repository;
};
