// Repositories dépendencies
const db = require("../db/config");

// Repositories
const user_repository = require("./user");

// create a repositories object for map all the repositories
const repositories = {
  user: user_repository(db),
};

// export our repositories object
module.exports = repositories;
