module.exports = (db) => {
  const user_repository = {
    getAll: async (data) => {
      const [rows, fields] = await db
        .promise()
        .execute("select * from Users", data);
      return rows;
    },
    // register: async (data) => {
    //   return models.user.query(
    //     "INSERT INTO Users(email, password) VALUES (?, ?)",
    //     data
    //   );
    // },

    // getByEmail: async (data) => {
    //   return models.user.query("select * from Users where email = ? LIMIT 1", [
    //     data,
    //   ]);
    // },
  };

  return user_repository;
};
