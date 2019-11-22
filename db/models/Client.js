const db = require("../index");
const S = require("sequelize");
const crypto = require("crypto");

class Client extends S.Model {}

Client.init(
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
  { sequelize: db, modelName: "client" }
);

Client.prototype.hashPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};
Client.prototype.randomSalt = function() {
  return crypto.randomBytes(20).toString("hex");
};
Client.prototype.validatePassword = function(password) {
  let newPassword = this.hashPassword(password);
  return newPassword === this.password;
};

Client.beforeCreate(user => {
  user.salt = user.randomSalt();
  user.password = user.hashPassword(user.password);
});

module.exports = Client;
