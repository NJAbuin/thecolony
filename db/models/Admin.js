const db = require("../index");
const S = require("sequelize");

class Admin extends S.Model {}

Admin.init(
  {
    fullName: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: S.STRING,
      allowNull: false
    },
    salt: {
      type: S.STRING
    }
  },
  { sequelize: db, modelName: "admin" }
);

module.exports = Admin;
