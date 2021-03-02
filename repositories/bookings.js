module.exports = (db) => {
  const bookings_repository = {
    getAll: async () => {
      const [rows] = await db.promise().execute("SELECT * FROM Bookings");
      return rows[0];
    },
    create: async (data) => {
      console.log(data, "ici");
      const [rows] = await db
        .promise()
        .execute("CALL book_places (?,?);", [data.userId, data.placeId]);

      console.log(rows);
      return rows[0];
    },
  };
  return bookings_repository;
};
