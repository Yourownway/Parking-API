module.exports = (db) => {
  const users_repository = {
    getAll: async () => {
      const [rows] = await db.promise().execute("SELECT * FROM Users");
      return rows[0];
    },
    register: async (data) => {
      const [
        row,
      ] = await db
        .promise()
        .execute(
          `INSERT IGNORE INTO Users (id, userEmail, userPassword) VALUES (UUID(),?,?)`,
          [data.userEmail, data.userPassword]
        );

      return row;
    },

    getByEmail: async (email) => {
      const [
        row,
      ] = await db
        .promise()
        .execute(
          "SELECT id, userEmail, userPassword, isAdmin FROM Users WHERE userEmail = ? LIMIT 1",
          [email]
        );

      return row[0];
    },
    getById: async (id) => {
      const [
        row,
      ] = await db
        .promise()
        .execute(
          "SELECT id, userEmail,userPassword FROM Users WHERE id = ? LIMIT 1",
          [id]
        );

      return row[0];
    },
    delete: async (id) => {
      const [row] = await db
        .promise()
        .execute("DELETE FROM Users WHERE id = ?", [id]);
      return row;
    },
    update: async (userId, data) => {
      const [
        row,
      ] = await db
        .promise()
        .execute(
          "UPDATE Users SET userEmail = ?, userPassword = ?  WHERE id = ? ",
          [data.userEmail, data.userPassword, userId]
        );

      return row;
    },
  };

  return users_repository;
};
