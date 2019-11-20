const db = require("../index");
const S = require("sequelize");

class Tag extends S.Model {}

Tag.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    },
    level: {
      type: S.ENUM,
      values: [1, 2, 3],
      allowNull: false
    }
  },
  { sequelize: db, modelName: "Tag" }
);

module.exports = Tag;
