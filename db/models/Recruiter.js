const db = require("../index");
const S = require("sequelize");
const crypto = require("crypto");

class Recruiter extends S.Model {}

Recruiter.init(
  {
    fullName: {
      type: S.STRING,
      allowNull: false
    },
    permissions: {
      type: S.ENUM(["activo", "pendiente", "inactivo"]),
      defaultValue: "inactivo",
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
    type: {
      type: S.STRING,
      defaultValue: "recruiter"
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

Recruiter.prototype.hashPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};
Recruiter.prototype.randomSalt = function() {
  return crypto.randomBytes(20).toString("hex");
};
Recruiter.prototype.validatePassword = function(password) {
  let newPassword = this.hashPassword(password);
  return newPassword === this.password;
};

Recruiter.beforeCreate(user => {
  user.salt = user.randomSalt();
  user.password = user.hashPassword(user.password);
});

module.exports = Recruiter;
