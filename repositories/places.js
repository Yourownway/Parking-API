module.exports = (db) => {
  const places_repository = {
    getAll: async () => {
      const [rows] = await db.promise().execute("SELECT * FROM Places");
      return rows[0];
    },
    getAvailable: async (floor) => {
      const [rows] = await db
          .promise()
          .execute(
            "SELECT * FROM Places WHERE floor = ? AND isAvailable = true"
          ),
        [floor];
      return rows[0];
    },
  };
  return places_repository;
};
