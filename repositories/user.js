module.exports = (db) => {
  const user_repository = {
    getAll: async () => {
      const [rows] = await models.user.promise().execute("SELECT * FROM Users");
      return rows;
    },
    register: async (data) => {
      const [row] = await db
        .promise()
        .execute(
          `INSERT INTO Users (id, userEmail, userPassword) VALUES (UUID(),?,?)`,
          [data.userEmail, data.userPassword],
          (err, result) => {
            if (err) {
              if (
                err.code == DUPLICATE_ERROR_CODE ||
                err.code == "ER_DUP_ENTRY"
              ) {
                return;
              } else {
                throw err;
              }
            }
          }
        );

      return row;
    },

    getByEmail: async (email) => {
      const [
        row,
      ] = await db
        .promise()
        .execute(
          "SELECT id, userEmail,userPassword,isAdmin FROM Users WHERE userEmail = ? LIMIT 1",
          [email]
        );

      return row[0];
    },
    getById: async (id) => {
      console.log(id);
      const [
        row,
      ] = await db
        .promise()
        .execute(
          "SELECT id, userEmail,userPassword FROM Users WHERE id = ? LIMIT 1",
          [id]
        );
      console.log(row);
      return row[0];
    },
    delete: async (id) => {
      console.log("delete", id);
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

  return user_repository;
};
