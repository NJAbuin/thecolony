const db = require("../index");
const S = require("sequelize");

class Candidate extends S.Model {}

Candidate.init(
  {
    DNI: {
      type: S.INTEGER,
      allowNull: false
    },
    fullName: {
      type: S.STRING,
      allowNull: true
    },
    age: {
      type: S.INTEGER,
      allowNull: true
    },
    jobTitle: {
      type: S.STRING
    },
    CV: {
      type: S.STRING,
      allowNull: true
    },
    address: {
      type: S.STRING
    },
    description: {
      type: S.TEXT,
      allowNull: true //cambiar a false
    },
    expectedSalary: {
      type: S.INTEGER
    }
  },
  { sequelize: db, modelName: "candidate" }
);

module.exports = Candidate;
