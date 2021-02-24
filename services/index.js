// service dépendencies
const repositories = require("../repositories/index"),
  bcrypt = require("bcrypt");

// services
const user_service = require("./user"),
  bcrypt_service = require("./bcrypt");

// create a services object for map all the services
const services = {
  user: user_service(repositories),
  mailer: mailer_service(nodemailer),
  cryptPassword: bcrypt_service(bcrypt),
};

// export our service object
module.exports = services;
