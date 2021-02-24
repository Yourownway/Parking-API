// Repositories dépendencies
const models = require('../db/models/index')

// Repositories
const user_repository = require('./user');

// create a repositories object for map all the repositories
const repositories = {
    user: user_repository(models)
}

// export our repositories object
module.exports = repositories;