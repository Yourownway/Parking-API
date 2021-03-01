// models dépendency
const db = require('../config');

// models
const User = require('./user');

// create a object models for map all the models
const models = {
    user: new User(db)
}

// export our model object
module.exports = models;