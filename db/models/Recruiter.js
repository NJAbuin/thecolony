const db = require("../index");
const S = require("sequelize");

class Recruiter extends S.Model {}

Recruiter.init(
  {
    fullName: {
      type: S.STRING,
      allowNull: false
    },
    permissions: {
      type: S.BOOLEAN,
      defaultValue: false,
      allowNull: false
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
    },
    website: {
      type: S.STRING
    },
    logoURL: {
      type: S.STRING
    },
    phone: {
      type: S.STRING
    }
  },
  { sequelize: db, modelName: "recruiter" }
);

module.exports = Recruiter;
