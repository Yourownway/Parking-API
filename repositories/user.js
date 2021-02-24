module.exports = (models) => {
    const user_repository = {
        getAll: async (data) => {
            return models.user.query("select * from Users");
        },
        register: async (data) => {
            return models.user.query("INSERT INTO Users(email, password) VALUES (?, ?)", data)
        },
        getById: async (id) => {
            return models.user.query("select * from Users where id = ? LIMIT 1", [id]);
        }
    }
    
    return user_repository;
}
