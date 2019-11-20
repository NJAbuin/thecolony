const db = require("../index");
const S = require("sequelize");

class Comment extends S.Model {}

Comment.init(
  {
    content: {
      type: S.TEXT,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "comment" }
);

module.exports = Comment;
