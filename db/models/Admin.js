const db = require("../index");
const S = require("sequelize");
const crypto = require("crypto");

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

Admin.prototype.hashPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};
Admin.prototype.randomSalt = function() {
  return crypto.randomBytes(20).toString("hex");
};
Admin.prototype.validatePassword = function(password) {
  let newPassword = this.hashPassword(password);
  return newPassword === this.password;
};

Admin.beforeCreate(user => {
  user.salt = user.randomSalt();
  user.password = user.hashPassword(user.password);
});

module.exports = Admin;
