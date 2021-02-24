// controllers dépendencies
const services = require('../services/index');

// controllers
const user_controller = require('./user');

// create a controllers object for map all the controllers
const controllers = {
    user: user_controller(services)
}

// export our controllers object
module.exports = controllers;