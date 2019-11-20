const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/thecolony", {
  logging: false,
  force: false
});

module.exports = db;
