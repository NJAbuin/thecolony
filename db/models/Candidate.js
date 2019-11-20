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
      allowNull: false
    },
    age: {
      type: S.INTEGER,
      allowNull: false
    },
    jobTitle: {
      type: S.STRING
    },
    CV: {
      type: S.STRING,
      allowNull: false
    },
    address: {
      type: S.STRING
    },
    expectedSalary: {
      type: S.INTEGER
    }
  },
  { sequelize: db, modelName: "jobposting" }
);

export default Candidate;
