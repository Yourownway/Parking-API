module.exports = (db) => {
  const user_repository = {
    getAll: async () => {
      const rows = await models.user.promise().execute("SELECT * FROM Users");
      return rows;
    },
    // register: async (data) => {
    //   const rows = await models.user.promise().execute(
    //     `INSERT INTO Users (userId,userEmail, userPassword)
    //      SELECT UUID(), ${data.userEmail}, ${data.userPassword}
    //     WHERE NOT EXISTS (
    //         SELECT userEmail, userPassword FROM Users WHERE userEmail = ${data.userEmail}
    //     ) LIMIT 1;`
    //   );
    //   return rows;
    // },
    register: async (data) => {
      console.log("tata");
      await db
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
                console.log(result, "result");
                return;
              } else {
                throw err;
              }
            }
          }
        );

      return rows;
    },

    getByEmail: async (email) => {
      const [
        rows,
      ] = await db
        .promise()
        .execute(
          "SELECT id, userEmail,userPassword,isAdmin FROM Users WHERE userEmail = ? LIMIT 1",
          [email]
        );

      return rows[0];
    },
  };

  return user_repository;
};
